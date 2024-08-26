import React from "react";
import styles from './CardSetores.module.css'

export default function CardSetores({foto, titulo, texto}){
    return (
    <div className={styles.cardContainer}>
        <img src={foto} alt={titulo} className={styles.image} />
        <h3 className={styles.title}>{titulo}</h3>
        <hr className={styles.divider} />
        <p className={styles.text}>{texto}</p>
    </div>
    );
}