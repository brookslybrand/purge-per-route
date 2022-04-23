import type { MetaFunction } from '@remix-run/server-runtime';

export let meta: MetaFunction = () => {
  return { title: 'Ecommerce | Product Quickviews' };
};

export default function ProductQuickviews() {
  return <h1>TODO: Add stuff</h1>;
}
