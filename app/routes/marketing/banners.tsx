import type { MetaFunction } from '@remix-run/server-runtime';

export let meta: MetaFunction = () => {
  return { title: 'Marketing | Banners' };
};

export default function Banners() {
  return <h1>TODO: Add stuff</h1>;
}
