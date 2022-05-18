import { Outlet } from '@remix-run/react';
import Sidebar from '~/components/sidebar';

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
