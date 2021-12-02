import Link from 'next/link';

import styles from '../styles/Home.module.css';

function Page404() {
  const paths = [
    { id: '/blog/2020/12', title: '/blog/2020/12' },
    { id: '/clients/max/somePrg', title: '/clients/max/somePrg' },
    { id: '/clients/', title: '/clients/' },
  ];

  return (
    <div className={styles.container}>
      <h1>Page not found</h1>
    </div>
  );
}

export default Page404;
