import React from 'react';
import styles from './SecaoSetores.module.css' // Importar CSS Module

export default function SecaoSetores () {
  return (
    <div className={styles.setoresContainer}>
    <div className={styles.background}>
      <div className={styles.containerMainTitle}>
           <h1 className={styles.mainTitle}>CONHEÇA NOSSOS <span className={styles.highlightSetores}>SETORES</span></h1>   
      </div>

      <div className={styles.containerSubTitle}>
        <h2 className={styles.subTitle}>No <span className={styles.highlightDasi}>DASI</span> você vai encontrar o setor que mais combina com você!</h2>
      </div>
      </div>
  </div>
  )
}

