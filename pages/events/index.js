import { useRouter } from 'next/router';

import { getAllEvents } from '../../data/dummy-data';
import EventList from '../../src/components/Events/EventList';
import EventsSearch from '../../src/components/Events/events-search';

function AllEventsPage() {
  const router = useRouter();
  // const { events } = props;
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
