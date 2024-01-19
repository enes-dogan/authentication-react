import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';

import NewsletterSignup from './NewsletterSignup.tsx';

export default function MainNavigation() {
  const token = useRouteLoaderData('root') as string | null;

  return (
    <header className="main-nav-header">
      <nav>
        <ul className="main-nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Newsletter
            </NavLink>
          </li>
          {!token && (
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) => (isActive ? 'active' : '')}
                end
              >
                Authentication
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="POST">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}
