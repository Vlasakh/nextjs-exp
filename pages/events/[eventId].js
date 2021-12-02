import { useRouter } from 'next/router';

import { getEventById } from '../../data/dummy-data';
import styles from '../styles/Home.module.css';

function EventDetaiPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) return <p>No event found!</p>;

  return (
    <div className={styles.container}>
      <h1>Event Detai</h1>
    </div>
  );
}

export default EventDetaiPage;
