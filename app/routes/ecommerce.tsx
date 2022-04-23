import { Outlet } from '@remix-run/react';
import Sidebar from '~/components/sidebar';

export default function Marketing() {
  return (
    <Sidebar
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
