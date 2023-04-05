import Home from "../components/organisms/home";

const HomePage = () => {
  return <Home />;
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default HomePage;
