import { useRouter } from 'next/router';

import { getEventById } from '../../data/dummy-data';
import EventSummary from '../../src/components/event-detail/event-summary';
import EventLogistics from '../../src/components/event-detail/event-logistics';
import EventContent from '../../src/components/event-detail/event-content';

function EventDetaiPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) return <p>No event found!</p>;

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics {...event} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetaiPage;
