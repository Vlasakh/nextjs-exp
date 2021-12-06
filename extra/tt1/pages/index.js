import fs from 'fs';
import * as path from 'path';

function HomePage({ products }) {
  return (
    <ul>
      {products.map(({ id, title }) => (
        <li key={id}>{title}</li>
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
    },
    revalidate: 3,
    // notFound: true,
  };
}
