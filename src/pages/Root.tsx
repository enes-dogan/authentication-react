import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation.tsx';
import { getTokenDuration } from '../util/auth.ts';

export default function RootLayout() {
  const token = useLoaderData() as string;
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'POST' });
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'POST' });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
