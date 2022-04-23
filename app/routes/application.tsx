import { Link, Outlet } from '@remix-run/react';

const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-4">
              <div // should this be an aside or nav?
              >
                <h3 className="sr-only">Categories</h3>
                <ul className="space-y-4 border-r border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <Link to={category.href} className="capitalize">
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product grid */}
              <div className="col-span-3">
                <h1>Application</h1>
                <Outlet />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
