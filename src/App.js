import "./App.css";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
function App(props) {
  const {
    product,
    cartVal,
    cartItem,
    onAddCart,
    onRemoveCart,
    onRemoveWholeCart,
  } = props;

  return (
    <div className="Appfont">
      <Header cartVal={cartVal} />
      <Banner />
      <MainContent
        product={product}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
        cartItem={cartItem}
        onRemoveWholeCart={onRemoveWholeCart}
      />
      <Footer />
    </div>
  );
}

export default App;
