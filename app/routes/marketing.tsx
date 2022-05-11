import { Outlet } from '@remix-run/react';
import Sidebar from '~/components/sidebar';
import type { LinksFunction } from '@remix-run/node';
import marketingCss from '~/styles/routes/marketing.css';

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: marketingCss },
];

export default function Marketing() {
  return (
    <Sidebar
      className="rounded-lg bg-red-100"
      subPages={['hero-sections', 'banners', 'feature-sections', 'headers']}
    >
      <Outlet />
    </Sidebar>
  );
}
