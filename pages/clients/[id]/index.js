import { useRouter } from 'next/router';

function ClientsProjectPage() {
  const router = useRouter();

  function handleLoadProject() {
    // load data . . .
    // router.push('/clients/max/projectA');
    router.push({ pathname: '/clients/[id]/[pprojectid]', query: { id: 'max', pprojectid: 'projectA' } });
  }

  return (
    <div className={''}>
      <h1>Clients Project Page</h1>
      <button onClick={handleLoadProject}>Load project A</button>
      <br />
      <br />
      /[id]/index: <pre>{JSON.stringify(router, null, 2)}</pre>
    </div>
  );
}

export default ClientsProjectPage;
