export async function getServerSideProps() {
  const res = await fetch("http://127.0.0.1:8000/api/data/");
  const data = await res.json();
  return { props: { data } };
}

export default function Home({ data }) {
  return (
      <div>
          <h1>Next.js + Django API</h1>
          <h2>Hola mi bebe</h2>
          <p>Este es el proceso definitivo para ver si esta suficientemente simplificado crear y desarrollar una web app</p>
          <p>{data.message}</p>
          <div><h3>Pagina de login:</h3> <a href="/login/">Click aqui!</a></div>
      </div>
  );
}