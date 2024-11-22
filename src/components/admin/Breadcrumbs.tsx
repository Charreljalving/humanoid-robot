import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbMap: { [key: string]: string } = {
    admin: 'Dashboard',
    articles: 'Artikelen',
    new: 'Nieuw Artikel',
    manage: 'Beheren',
    edit: 'Bewerken',
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-neutral-600 mb-6">
      <Link to="/admin" className="hover:text-neutral-900 flex items-center">
        <Home className="w-4 h-4" />
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = breadcrumbMap[name] || name;

        // Skip numeric IDs in the breadcrumb display
        if (!isNaN(Number(name))) return null;

        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
            {isLast ? (
              <span className="font-medium text-neutral-900">{displayName}</span>
            ) : (
              <Link
                to={routeTo}
                className="hover:text-neutral-900 transition-colors"
              >
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}