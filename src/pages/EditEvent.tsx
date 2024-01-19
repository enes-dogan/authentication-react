import { useRouteLoaderData } from 'react-router-dom';
import { EventTypes } from '../types.ts';

import EventForm from '../components/EventForm.tsx';

export default function EditEventPage() {
  const data = useRouteLoaderData('event-detail') as { event: EventTypes };

  return <EventForm event={data.event} method="PATCH" />;
}
