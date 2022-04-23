import type { MetaFunction } from '@remix-run/server-runtime';

export let meta: MetaFunction = () => {
  return { title: 'Marketing | Headers' };
};

export default function Headers() {
  return <h1>TODO: Add stuff</h1>;
}
