import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import styles from "./style.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import star from "../../assets/star.png";
import heart from "../../assets/heart.png";
import line_2 from "../../assets/line_2.png";
import mail from "../../assets/mail.png";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import twiter from "../../assets/twiter.png";
import { getAllProducts } from "../../redux/actions/actionCreater";
import { Oval } from "react-loader-spinner";

const ProductCard = () => {
  const allProducts = useSelector((store) => store.products.products);
  const dispatch = useDispatch();

  const [oneProduct, setOneProduct] = useState([]);
  const [dataForSeveralProducts, setDataForSeveralProducts] = useState([]);
  let { id } = useParams();
  const page = useParams();

  useEffect(() => {
    if (id && dataForSeveralProducts.length) {
      const result = dataForSeveralProducts.filter((item) => item.id === +id);
      setOneProduct(result[0]);
    }
  }, [id, allProducts]);

  const shuffled = useMemo(
    () => dataForSeveralProducts.sort(() => 0.5 - Math.random()),
    [dataForSeveralProducts]
  );

  let selected = useMemo(
    () => shuffled.filter((item) => item.id !== oneProduct.id).slice(0, 3),
    [shuffled]
  );

  const handleProducts = () => {
    dispatch(getAllProducts());
  };

  useEffect(() => {
    handleProducts();
  }, []);

  useEffect(() => {
    setDataForSeveralProducts(allProducts);
  }, [allProducts]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Header />
      {oneProduct.length < 1 ? (
        <div className={styles.loader}>
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
      ) : (
        <div>
          <div className={styles.productCard}>
            <div className={styles.productCard__images}>
              <div className={styles.smallImagesContainer}>
                <img
                  src={oneProduct.image}
                  alt="product image"
                  className={styles.smallImage}
                />
                <img
                  src={oneProduct.image}
                  alt="product image"
                  className={styles.smallImage}
                />
                <img
                  src={oneProduct.image}
                  alt="product image"
                  className={styles.smallImage}
                />
                <img
                  src={oneProduct.image}
                  alt="product image"
                  className={styles.smallImage}
                />
              </div>
              <div className={styles.bigImageContainer}>
                <img
                  src={oneProduct.image}
                  alt="product image"
                  className={styles.bigImage}
                />
              </div>
            </div>
            <div className={styles.productCard__details}>
              <div className={styles.productCard__details__title}>
                <h5>{oneProduct.title}</h5>
              </div>
              <div className={styles.productCard__details__price}>
                <p>$ {oneProduct.price}</p>
              </div>
              <div className={styles.productCard__details__rating}>
                <div className={styles.stars}>
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
                <div>
                  <p className={styles.customerReview}>1 customer review</p>
                </div>
              </div>
              <div className={styles.productCard__details__description}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam placerat, augue a volutpat hendrerit, sapien tortor
                  faucibus augue, a maximus elit ex vitae libero. Sed quis
                  mauris eget arcu facilisis consequat sed eu felis.{" "}
                </p>
              </div>
              <div className={styles.productCard__details__quantity}>
                <div className={styles.quantity}>
                  <div>-</div>
                  <div>1</div>
                  <div>+</div>
                </div>
                <div className={styles.addToCart}>
                  <button disabled>Add to Cart</button>
                </div>
              </div>
              <div className={styles.productCard__details__socialIcons}>
                <div className={styles.icons}>
                  <img src={heart} alt="heart" className={styles.heart} />
                  <img src={line_2} alt="line" className={styles.line} />
                </div>
                <div className={styles.socialMedia}>
                  <img src={mail} alt="mail" />
                  <img src={facebook} alt="facebook icon" />
                  <img src={insta} alt="instagram icon" />
                  <img src={twiter} alt="twiter icon" />
                </div>
              </div>
              <div className={styles.productCard__details__sku}>
                <p className={styles.title}>SKU: </p>
                <p className={styles.quantity}>{oneProduct.id}</p>
              </div>
              <div className={styles.productCard__details__categories}>
                <p className={styles.title}>Categories: </p>
                <p className={styles.categoryName}>{oneProduct.category}</p>
              </div>
            </div>
          </div>
          <div className={styles.additionalInfo}>
            <div className={styles.additionalInfo__titles}>
              <h3>Description</h3>
              <h3 className={styles.deactivatedTitle}>Aditional information</h3>
              <h3 className={styles.deactivatedTitle}>Reviews(0)</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis. Nunc sed porta augue. Morbi
              porta tempor odio, in molestie diam bibendum sed.
            </p>
          </div>
          <div className={styles.similarItems}>
            <h3 className={styles.title}>Similar Items</h3>
            <div>
              <ProductList data={selected} id={id} />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProductCard;
