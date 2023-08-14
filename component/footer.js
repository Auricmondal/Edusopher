import Link from 'next/link'
import React from 'react'
import styles from '/styles/Comp.module.css'

const Footer = () => {
  return (
    
    <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.leftfooter}>All Rights Reserved &#169; 2023 </div>
      <div className={styles.midfooter}><Link href='/tnc' > T&c Privacy Policy Disclaimer</Link></div>
      <div className={styles.rightfooter}>Designed By <a href="https://www.instagram.com/auric_mondal/" target="_blank">Auric Mondal</a></div>
    </div>
    </footer>
  )
}

export default Footer