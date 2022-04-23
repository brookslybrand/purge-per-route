import { Outlet } from '@remix-run/react';
import Sidebar from '~/components/sidebar';

export default function Marketing() {
  return (
    <Sidebar
      subPages={['banners', 'feature-sections', 'headers', 'hero-sections']}
    >
      <Outlet />
    </Sidebar>
  );
}
