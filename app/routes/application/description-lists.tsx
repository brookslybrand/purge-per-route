import type { MetaFunction } from '@remix-run/server-runtime';

export let meta: MetaFunction = () => {
  return { title: 'Application | Description Lists' };
};

export default function DescriptionLists() {
  return <h1>TODO: Add stuff</h1>;
}
