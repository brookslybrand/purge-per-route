import { redirect } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';

export let loader: LoaderFunction = ({ request }) => {
  return redirect(`${request.url}/hero-sections`);
};
