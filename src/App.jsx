import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Oval } from "react-loader-spinner";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import UpperSection from "./components/UpperSection/UpperSection";
import { getAllProducts } from "./redux/actions/actionCreater";

function App() {
  const allProducts = useSelector((store) => store.products.products);
  const dispatch = useDispatch();
  const [viewAll, setViewAll] = useState(false);
  const [data, setData] = useState([]);

  const showSeveralItems = useMemo(() => data.slice(0, 6), [data]);

  const handleProducts = () => {
    dispatch(getAllProducts());
  };

  useEffect(() => {
    handleProducts();
  }, []);

  useEffect(() => {
    setData(allProducts);
  }, [allProducts]);

  return (
    <div className="App">
      <Header />
      {data.length > 0 ? (
        <>
          <UpperSection setViewAll={setViewAll} viewAll={viewAll} />
          <ProductList data={viewAll ? data : showSeveralItems} />
        </>
      ) : (
        <div className="loader">
          <Oval
            ariaLabel="loading-indicator"
            height={200}
            width={200}
            strokeWidth={5}
            strokeWidthSecondary={1}
            color="blue"
            secondaryColor="white"
          />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
