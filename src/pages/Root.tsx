import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation.tsx';

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
