import { Outlet } from '@remix-run/react';
import Sidebar from '~/components/sidebar';

export default function Application() {
  return (
    <Sidebar
      className="brooks brooks rounded-lg bg-zinc-100"
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
