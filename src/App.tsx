import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Layout>
      <Navbar />
      <div>App</div>
      <Footer />
    </Layout>
  );
};

export default App;
