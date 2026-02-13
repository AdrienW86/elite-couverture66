import React from 'react'; 
import styles from './button.module.css'

export default function CallButton() {
    return (
        <a href="tel:+33759311239" className={styles.link}>
            <button className={styles.btn}>
            📞 Appeler
            </button>
        </a>
    );
} 