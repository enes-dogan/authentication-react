import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import { EventTypes } from '../types.ts';

import EventsList from '../components/EventsList.tsx';

export default function EventsPage() {
  const { events } = useLoaderData() as { events: EventTypes[] };

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents: EventTypes[]) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json(
      { message: 'Could not load events.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = (await response.json()) as { events: EventTypes[] };
    return resData.events;
  }
}

/* eslint-disable-next-line react-refresh/only-export-components */
export function loader() {
  return defer({
    events: loadEvents(),
  });
}
