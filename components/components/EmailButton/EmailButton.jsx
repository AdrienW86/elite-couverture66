import React from 'react';
import styles from './email.module.css';

export default function EmailButton() {
  return (
    <a href="mailto:klenngurtner@gmail.com" className={styles.link}>
      <p>✉️ klenngurtner@gmail.com</p>
    </a>
  );
}