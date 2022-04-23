import type { MetaFunction } from '@remix-run/server-runtime';

export let meta: MetaFunction = () => {
  return { title: 'Ecommerce | Product Features' };
};

export default function ProductFeatures() {
  return <h1>TODO: Add stuff</h1>;
}
