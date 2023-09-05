import React from 'react'
import styles from "./style.module.scss";

const UpperSection = ({setViewAll}) => {

  return (
    <div className={styles.upperSection}>
      <h3>Shop The Latest</h3>
      <p onClick={() => setViewAll(true)}>View All</p>
    </div>
  )
}

export default UpperSection