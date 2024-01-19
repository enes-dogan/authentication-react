import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation.tsx';

export default function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
