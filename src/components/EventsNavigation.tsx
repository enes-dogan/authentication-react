import { NavLink } from 'react-router-dom';

export default function EventsNavigation() {
  return (
    <header className="events-nav-header">
      <nav>
        <ul className="events-nav-list">
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events/new"
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
