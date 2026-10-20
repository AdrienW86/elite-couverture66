import React from 'react'
import Link from 'next/link'
import styles from './phone.module.css'

export default function PhoneButton() {
  return (
    <Link href="tel:+33628286967" className={styles.link}>
      <p> 📞 06.28.28.69.67</p>                        
    </Link>
  )
}
