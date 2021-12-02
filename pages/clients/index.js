import Head from 'next/head';
import Link from 'next/link';

function ClientsPage() {
  const paths = [
    { id: 'jak', title: 'Jake' },
    { id: 'max', title: 'Maximilian' },
  ];

  return (
    <div className={''}>
      <ul>
        {paths.map(({ id, title }) => (
          <li>
            <Link
              key={id}
              href={{
                pathname: '/clients/[id]',
                query: { id },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
