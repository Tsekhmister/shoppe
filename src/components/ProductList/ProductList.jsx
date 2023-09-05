import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import styles from "./style.module.scss";

const ProductList = ({data, id}) => {
  return (
    <div className={styles.productContainer}>
      <ProductItem data={data} id={id} />
    </div>
  )
}

export default ProductList