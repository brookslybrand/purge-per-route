import { Outlet } from '@remix-run/react';
import Sidebar from '~/components/sidebar';

export default function Application() {
  return (
    // TODO: remove className, just using for testing
    <div className="bg-green-400">
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
