import type { MetaFunction } from '@remix-run/server-runtime';

export let meta: MetaFunction = () => {
  return { title: 'Application | Pagination' };
};

export default function Pagination() {
  return <h1>TODO: Add stuff</h1>;
}
