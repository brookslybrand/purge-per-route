import type { MetaFunction } from '@remix-run/server-runtime';

export let meta: MetaFunction = () => {
  return { title: 'Application | Login and Registration' };
};

export default function LoginAndRegistration() {
  return <h1>TODO: Add stuff</h1>;
}
