import "./components/Header/Header";
import Header from "./components/Header/Header";
import Basic from "./components/Basic/Basic";
import Basic_bottom from "./components/Basic_bottom/Basic_bottom";
import Footer from "./components/Footer/Footer";
import Flickity_сarousel from "./components/Flickity/Flickity_сarousel";

function App() {
  return (
    <div className="Wrapper">
      <Header></Header>
      <Flickity_сarousel></Flickity_сarousel>
      <Basic></Basic>
      <Basic_bottom></Basic_bottom>
      <Footer></Footer>
    </div>
  );
}

export default App;
