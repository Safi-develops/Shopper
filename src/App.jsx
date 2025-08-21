import CopyRight from "./components/Footer/CopyRight";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Header/Nav/Nav";
import Slide from "./components/Home/Slide";
import LatestNews from "./components/Latest News/LatestNews";
import LatestProduct from "./components/Products/LatestProduct/LatestProduct";
import TrendingProducts from "./components/Products/TrendingProducts/TrendingProducts";
import Shop from "./components/Shop/Shop";
import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  return (
    <>
      <Nav />
      <Slide />
      <Shop />
      <LatestProduct />
      <TrendingProducts />
      <Testimonials />
      <LatestNews />
      <Footer />
      <CopyRight />
    </>
  );
}

export default App;
