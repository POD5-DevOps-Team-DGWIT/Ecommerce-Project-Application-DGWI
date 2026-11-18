// DEV-ONLY: fake backend so you can preview the UI without Kubernetes / gRPC services.
// It only answers when UI_MOCK=true (set in src/frontend/.env.local). In any other
// environment (like production) it returns 404, so it is harmless if it gets deployed.

import type { NextApiRequest, NextApiResponse } from 'next';

type Money = { currencyCode: string; units: number; nanos: number };

const usd = (units: number, nanos = 0): Money => ({ currencyCode: 'USD', units, nanos });

// Sample products. Pictures match the files in src/image-provider/static/products/
const products = [
  { id: 'OLJCESPC7Z', name: 'National Park Foundation Explorascope', picture: 'NationalParkFoundationExplorascope.jpg', priceUsd: usd(101, 960000000), categories: ['telescopes'], description: 'A compact, easy-to-use telescope that is perfect for first-time stargazers.' },
  { id: '66VCHSJNUP', name: 'Starsense Explorer Refractor Telescope', picture: 'StarsenseExplorer.jpg', priceUsd: usd(349, 950000000), categories: ['telescopes'], description: 'Uses your smartphone to identify what you are looking at in the night sky.' },
  { id: '1YMWWN1N4O', name: 'Eclipsmart Travel Refractor Telescope', picture: 'EclipsmartTravelRefractorTelescope.jpg', priceUsd: usd(129, 950000000), categories: ['telescopes', 'travel'], description: 'Light, portable, and ready for eclipse day. Includes a solar filter.' },
  { id: 'L9ECAV7KIM', name: 'Lens Cleaning Kit', picture: 'LensCleaningKit.jpg', priceUsd: usd(21, 950000000), categories: ['accessories'], description: 'Keep your optics spotless with this complete cleaning set.' },
  { id: '2ZYFJ3GM2N', name: 'Roof Binoculars', picture: 'RoofBinoculars.jpg', priceUsd: usd(209, 950000000), categories: ['binoculars'], description: 'Sharp, bright, waterproof binoculars for day and night viewing.' },
  { id: '0PUK6V6EV0', name: 'Solar System Color Imager', picture: 'SolarSystemColorImager.jpg', priceUsd: usd(175), categories: ['accessories', 'telescopes'], description: 'Capture colour images of the Moon and planets.' },
  { id: 'LS4PSXUNUM', name: 'Red Flashlight', picture: 'RedFlashlight.jpg', priceUsd: usd(57, 800000000), categories: ['accessories', 'flashlights'], description: 'Red light keeps your eyes adapted to the dark while you observe.' },
  { id: '9SIQT8TOJO', name: 'Optical Tube Assembly', picture: 'OpticalTubeAssembly.jpg', priceUsd: usd(3599), categories: ['accessories', 'telescopes', 'assembly'], description: 'A professional-grade optical tube for serious astronomers.' },
  { id: '6E92ZMYYFZ', name: 'Solar Filter', picture: 'SolarFilter.jpg', priceUsd: usd(69, 950000000), categories: ['accessories', 'telescopes'], description: 'Safely observe the Sun with this certified solar filter.' },
  { id: 'HQTGWGPNH4', name: 'The Comet Book', picture: 'TheCometBook.jpg', priceUsd: usd(0, 990000000), categories: ['books'], description: 'Everything you need to know about comets, in one beautiful book.' },
];

const RATES: Record<string, number> = { USD: 1, EUR: 0.92, GBP: 0.79, NGN: 1500 };

const inCurrency = (product: (typeof products)[number], currencyCode: string) => {
  const rate = RATES[currencyCode];
  if (!rate) return product;
  const total = (product.priceUsd.units + product.priceUsd.nanos / 1e9) * rate;
  const units = Math.floor(total);
  return { ...product, priceUsd: { currencyCode, units, nanos: Math.round((total - units) * 1e9) } };
};

// the fake cart lives in memory (resets when the dev server restarts)
const cart: Record<string, number> = {};

const first = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value) ?? '';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (process.env.UI_MOCK !== 'true') {
    return res.status(404).send('');
  }

  const [resource, id] = (req.query.path as string[]) ?? [];
  const currencyCode = first(req.query.currencyCode) || 'USD';
  const find = (productId: string) => products.find(p => p.id === productId);
  const cartItems = () =>
    Object.entries(cart).map(([productId, quantity]) => ({
      productId,
      quantity,
      product: inCurrency(find(productId) ?? products[0], currencyCode),
    }));

  switch (resource) {
    case 'products': {
      if (id) {
        const product = find(id);
        return product ? res.status(200).json(inCurrency(product, currencyCode)) : res.status(404).send('');
      }
      return res.status(200).json(products.map(p => inCurrency(p, currencyCode)));
    }

    case 'currency':
      return res.status(200).json(Object.keys(RATES));

    case 'cart': {
      if (req.method === 'POST') {
        const { item } = req.body as { item: { productId: string; quantity: number } };
        const next = (cart[item.productId] ?? 0) + item.quantity;
        if (next > 0) cart[item.productId] = next;
        else delete cart[item.productId];
        return res.status(200).json({ userId: 'mock-user', items: cartItems() });
      }
      if (req.method === 'DELETE') {
        Object.keys(cart).forEach(key => delete cart[key]);
        return res.status(204).send('');
      }
      return res.status(200).json({ userId: 'mock-user', items: cartItems() });
    }

    case 'data':
      return res.status(200).json([{ redirectUrl: '/', text: 'Sample ad: free shipping on all orders this week!' }]);

    case 'recommendations': {
      const exclude = ([] as string[]).concat((req.query.productIds as string[] | string | undefined) ?? []);
      return res
        .status(200)
        .json(products.filter(p => !exclude.includes(p.id)).slice(0, 4).map(p => inCurrency(p, currencyCode)));
    }

    case 'shipping':
      return res.status(200).json({ currencyCode, units: 8, nanos: 990000000 });

    case 'checkout': {
      const order = req.body as { address?: unknown };
      const items = cartItems().map(({ productId, quantity, product }) => ({
        item: { productId, quantity, product },
        cost: product.priceUsd,
      }));
      Object.keys(cart).forEach(key => delete cart[key]);
      return res.status(200).json({
        orderId: 'MOCK-ORDER-0001',
        shippingTrackingId: 'MOCK-TRACK-0001',
        shippingCost: { currencyCode, units: 8, nanos: 990000000 },
        shippingAddress: order.address,
        items,
      });
    }

    default:
      return res.status(404).send('');
  }
};

export default handler;