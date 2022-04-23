import type { MetaFunction } from '@remix-run/server-runtime';

export let meta: MetaFunction = () => {
  return { title: 'Ecommerce | Product Lists' };
};

export default function ProductLists() {
  return <h1>TODO: Add stuff</h1>;
}
