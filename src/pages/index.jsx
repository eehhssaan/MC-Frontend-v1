import Home from "../components/organisms/home";
import Layout from "../components/organisms/layout";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default HomePage;
