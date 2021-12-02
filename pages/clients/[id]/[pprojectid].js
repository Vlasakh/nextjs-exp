import { useRouter } from 'next/router';

function ConcreteProjectOfConcreteClientsPage() {
  const router = useRouter();

  return (
    <div className={''}>
      <h1>ConcreteProjectOfConcreteClientsPage</h1>
      /[pprojectid]/index: <pre>{JSON.stringify(router, null, 2)}</pre>
    </div>
  );
}

export default ConcreteProjectOfConcreteClientsPage;
