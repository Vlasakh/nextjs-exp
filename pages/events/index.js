import Link from 'next/link';

import styles from '../styles/Home.module.css';

function AllEventsPage() {
  const paths = [
    { id: '/blog/2020/12', title: '/blog/2020/12' },
    { id: '/clients/max/somePrg', title: '/clients/max/somePrg' },
    { id: '/clients/', title: '/clients/' },
  ];

  return (
    <div className={styles.container}>
      <h1>All Events</h1>
      <ul>
        {paths.map(({ id, title }) => (
          <li>
            <Link key={id} href={id}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllEventsPage;
