import EventItem from './EventItem';

import css from './EventList.module.css';

function EventList({ items }) {
  return (
    <ul className={css.list}>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}

export default EventList;
