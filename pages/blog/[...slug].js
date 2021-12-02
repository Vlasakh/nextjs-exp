import { useRouter } from 'next/router';

function ConcreteProjectOfConcreteClientsPage() {
  const router = useRouter();

  return (
    <div className={''}>
      /blog/[...slug].js: <pre>{JSON.stringify(router.query, null, 2)}</pre>
    </div>
  );
}

export default ConcreteProjectOfConcreteClientsPage;
