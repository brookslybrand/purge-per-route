import type { MetaFunction } from '@remix-run/server-runtime';

export let meta: MetaFunction = () => {
  return { title: 'Ecommerce | Category Previews' };
};

export default function CategoryPreviews() {
  return <h1>TODO: Add stuff</h1>;
}
