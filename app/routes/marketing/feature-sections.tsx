import type { MetaFunction } from '@remix-run/server-runtime';

export let meta: MetaFunction = () => {
  return { title: 'Marketing | Feature Sections' };
};

export default function FeatureSections() {
  return <h1>TODO: Add stuff</h1>;
}
