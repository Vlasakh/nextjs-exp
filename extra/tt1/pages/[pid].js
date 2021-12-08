import fs from 'fs';
import * as path from 'path';

async function getData() {
  const pathData = path.join(process.cwd(), 'data', 'dummy-data.json');
  const json = await fs.promises.readFile(pathData, 'utf8');
  let data;

  try {
    data = JSON.parse(json);
  } catch (e) {}

  return data;
}

function ProductDetailPage({ loadedProduct }) {
  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);
  // if (!event) return <p>No event found!</p>;

  if (!loadedProduct) {
    return 'Loading...';
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

export default ProductDetailPage;

export async function getStaticProps(context) {
  const {
    params: { pid },
  } = context;
  const data = await getData();
  let product;

  product = data.find(({ id }) => id === pid);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths(context) {
  const data = await getData();
  const IDs = data.map(({ id }) => id);
  const paths = IDs.map((pid) => ({ params: { pid } }));

  return {
    // prettier-ignore
    paths,
    // [
    //   // { params: { pid: 'p1' } },
    //   // { params: { pid: 'p2' } },
    //   // { params: { pid: 'p3' } }
    // ],
    fallback: false,
    // fallback: 'blocking',
  };
}
