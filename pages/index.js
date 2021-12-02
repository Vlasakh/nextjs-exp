import Link from 'next/link';

import EventList from '../src/components/Events/EventList';
import { getFeaturedEvents } from '../data/dummy-data';

import styles from '../styles/Home.module.css';

const PATHS = [
  { id: '/blog/2020/12', title: '/blog/2020/12' },
  { id: '/clients/max/somePrg', title: '/clients/max/somePrg' },
  { id: '/clients/', title: '/clients/' },
];

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.container}>
      <h1>Home page</h1>
      <ul>
        {PATHS.map(({ id, title }) => (
          <li>
            <Link key={id} href={id}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
