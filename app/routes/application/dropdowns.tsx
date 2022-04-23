import type { MetaFunction } from '@remix-run/server-runtime';

export let meta: MetaFunction = () => {
  return { title: 'Application | Dropdowns' };
};

export default function Dropdowns() {
  return <h1>TODO: Add stuff</h1>;
}
