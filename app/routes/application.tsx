import { Outlet } from '@remix-run/react';
import Sidebar from '~/components/sidebar';
import type { LinksFunction } from '@remix-run/node';
import applicationCss from '~/styles/routes/application.css';

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: applicationCss },
];

export default function Application() {
  return (
    <Sidebar
      className="rounded-lg bg-zinc-100"
      subPages={[
        'description-lists',
        'dropdowns',
        'login-and-registration',
        'pagination',
      ]}
    >
      <Outlet />
    </Sidebar>
  );
}
