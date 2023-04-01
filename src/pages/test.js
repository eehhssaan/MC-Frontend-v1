import Head from "next/head";

function Test() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Test;
