import React from "react";
import styles from "./style.module.scss";
import { Link, useLocation } from "react-router-dom";

const ProductItem = ({ data, id }) => {
  const {pathname} = useLocation();
  const path = pathname.split('/').slice(0, -1).join('/');
  return (
    <>
      {data.map((item) => (
        <div className={styles.productItem} key={item.id}>
          <div>
            <Link to={id ? path + `/${item.id}` : `products/${item.id}`}>
              <img
                src={item.image}
                alt="product image"
                className={styles.productItem__image}
              />
            </Link>
            <p className={styles.productItem__title}>{item.title}</p>
          </div>
          <p className={styles.productItem__price}>$ {item.price}</p>
        </div>
      ))}
    </>
  );
};

export default ProductItem;
