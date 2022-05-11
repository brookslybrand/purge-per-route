import { Outlet } from '@remix-run/react';
import Sidebar from '~/components/sidebar';
import type { LinksFunction } from '@remix-run/node';
import ecommerceCss from '~/styles/routes/ecommerce.css';

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: ecommerceCss },
];

export default function Marketing() {
  return (
    <Sidebar
      className="rounded-lg bg-violet-50"
      subPages={[
        'category-previews',
        'product-features',
        'product-lists',
        'product-quickviews',
      ]}
    >
      <Outlet />
    </Sidebar>
  );
}
