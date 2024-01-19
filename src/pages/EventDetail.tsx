import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import {
  EventTypes,
  EventDetailLoaderParams,
  DeleteEventActionParams,
} from '../types.ts';

import EventItem from '../components/EventItem.tsx';
import EventsList from '../components/EventsList.tsx';

export default function EventDetailPage() {
  const { event, events } = useRouteLoaderData('event-detail') as {
    event: EventTypes;
    events: EventTypes[];
  };

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent: EventTypes) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents: EventTypes[]) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

async function loadEvent(id: string) {
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not load the details for selected event.' },
      { status: 500 }
    );
  } else {
    const resData = (await response.json()) as { event: EventTypes };
    return resData.event;
  }
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

/* eslint-disable react-refresh/only-export-components */
export async function loader({ params }: EventDetailLoaderParams) {
  const id = params.eventId!;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ request, params }: DeleteEventActionParams) {
  const eventId = params.eventId!;

  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: 'Could not delete selected event' }, { status: 500 });
  }

  return redirect('/events');
}
