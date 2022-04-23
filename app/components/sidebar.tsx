import { Link, useLocation } from '@remix-run/react';
import { classNames } from '~/utils';

export interface SidebarProps {
  subPages: string[];
  children: React.ReactNode;
}

export default function Sidebar({ subPages, children }: SidebarProps) {
  const { pathname } = useLocation();
  return (
    <div className="bg-white">
      <div>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-4">
              <div // should this be an aside or nav?
              >
                <h3 className="sr-only">Categories</h3>
                <ul className="space-y-4 border-r border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subPages.map((to) => (
                    <li key={to}>
                      <Link
                        to={`./${to}`}
                        className={classNames(
                          'capitalize',
                          RegExp(to).test(pathname)
                            ? 'font-bold text-blue-900'
                            : ''
                        )}
                      >
                        {to.replace(/-/g, ' ')}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {children}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
