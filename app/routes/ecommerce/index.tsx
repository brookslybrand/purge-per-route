import { redirect } from '@remix-run/server-runtime';
import type { LoaderFunction } from '@remix-run/server-runtime';

export let loader: LoaderFunction = ({ request }) => {
  return redirect(`${request.url}/category-previews`);
};
