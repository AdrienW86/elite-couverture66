import React from 'react'; 
import styles from './button.module.css'

export default function CallButton() {
    return (
        <a href="/contact" className={styles.link}>
            <button className={styles.btn}>
            Devis gratuit
            </button>
        </a>
    );
} 