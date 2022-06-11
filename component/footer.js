import React from 'react'
import styles from '/styles/Comp.module.css'

const Footer = () => {
  return (
    
    <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.leftfooter}>All Rights Reserved &#169; 2022 </div>
      <div className={styles.rightfooter}>Designed By <a className={styles.link} href="https://www.instagram.com/auric_mondal/" target="_blank">Auric Monal</a></div>
    </div>
    </footer>
  )
}

export default Footer