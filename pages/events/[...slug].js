import { useRouter } from 'next/router';

function FilteredEventsPage() {
  const router = useRouter();

  return (
    <div className={''}>
      <h1>Filtered events page</h1>
      /blog/[...slug].js: <pre>{JSON.stringify(router.query, null, 2)}</pre>
    </div>
  );
}

export default FilteredEventsPage;
