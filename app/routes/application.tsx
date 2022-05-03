import { Outlet } from '@remix-run/react';
import Sidebar from '~/components/sidebar';

export default function Application() {
  return (
    <div>
      <Sidebar
        subPages={[
          'description-lists',
          'dropdowns',
          'login-and-registration',
          'pagination',
        ]}
      >
        <Outlet />
      </Sidebar>
    </div>
  );
}
