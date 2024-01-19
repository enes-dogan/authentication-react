import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/Error.tsx';
import RootLayout from './pages/Root.tsx';
import HomePage from './pages/Home.tsx';
import EventsRootLayout from './pages/EventsRoot.tsx';
import EditEventPage from './pages/EditEvent.tsx';
import NewEventPage from './pages/NewEvent.tsx';
import EventsPage from './pages/Events.tsx';
import EventDetailPage from './pages/EventDetail.tsx';
import NewsletterPage from './pages/Newsletter.tsx';
import AuthenticationPage from './pages/Authentication.tsx';

import { loader as eventsLoader } from './pages/Events.tsx';
import { action as deleteEventAction } from './pages/EventDetail.tsx';
import { loader as eventDetailLoader } from './pages/EventDetail.tsx';
import { action as formEventAction } from './components/EventForm.tsx';
import { action as newsletterAction } from './pages/Newsletter.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: formEventAction,
              },
            ],
          },
          { path: 'new', element: <NewEventPage />, action: formEventAction },
        ],
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
