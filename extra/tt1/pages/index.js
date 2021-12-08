import Link from 'next/link';
import fs from 'fs';
import * as path from 'path';

function HomePage({ products }) {
  return (
    <ul>
      {products.map(({ id, title }) => (
        <li key={id}>
          <Link href={`/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default HomePage;

export async function getStaticProps(context) {
  const pathData = path.join(process.cwd(), 'data', 'dummy-data.json');
  const json = await fs.promises.readFile(pathData, 'utf8');
  let data;

  try {
    data = JSON.parse(json);
  } catch (e) {}

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  if (!data.length) {
    return { notFound: true };
  }

  return {
    props: {
      products: data,
      products1: [
        {
          id: 'p1',
          title: 'Programming for everyone ',
          description:
            'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
          location: 'Somestreet 25, 12345 San Somewhereo',
          date: '2021-05-12',
          image: 'images/coding-event.png',
          isFeatured: false,
        },
      ],
    },
    revalidate: 3,
    // notFound: true,
  };
}
