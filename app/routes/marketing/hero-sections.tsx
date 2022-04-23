import type { MetaFunction } from '@remix-run/server-runtime';

export let meta: MetaFunction = () => {
  return { title: 'Marketing | Hero Sections' };
};

export default function HeroSections() {
  return <h1>TODO: Add stuff</h1>;
}
