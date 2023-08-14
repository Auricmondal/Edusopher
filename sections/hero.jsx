import Link from 'next/link'
import React from 'react'
import styles from "../styles/Landing.module.css";
import Image from 'next/image';
const hero = () => {
  return (
    <>
     {/* The elements of Hero Section is here */}
     <section className={styles.hero}>
        <div className={styles.container}>
          {/* Left Part of the Hero section goes here */}
          <div className={styles.left}>
            <p>Recreating The Habit of Reading </p>
            <h1>
              We write to Make <br />
              <span>
                <b>You shine</b>
              </span>
            </h1>
            <p>
              Cause &#34;A reader lives a thousand lives before he dies . . . The man who never reads lives only one.&#34;
            </p>
            <div className={styles.content}>
              <Link href="/blogs">
                Let&apos;s Gets Started !
              </Link>
            </div>
          </div>
          
          {/* Right Part of the Hero section goes here */}

          <div className={styles.right}>
          <img src="/Herophoto1.webp" alt="edusopher.com homepage taken from unsplash"  />
            <img src="/Herophoto2.webp" alt="edusopher.com homepage taken from unsplash" />
            {/* The table for WE GOT YOU COVERD GOES HERE */}
            <div className={styles.list} width={274}>
              <h3 className={styles.listitems}>We got you covered</h3>
              <hr />

              <ul>
              {/* <li>
                <embed src="/tick.svg" type="" />
                News
              </li> */}
              <li>
                <embed src="/tick.svg" type="" />
                Philosophy{" "}
              </li>
              <li>
                <embed src="/tick.svg" type="" />
                Government Schemes{" "}
              </li>
              {/* <li>
                <embed src="/tick.svg" type="" />
                Finance/ Economy
              </li> */}
              <li>
                <embed src="/tick.svg" type="" />
                English
              </li>
              {/* <li>
                <embed src="/tick.svg" type="" />
                Geography
              </li> */}
              {/* <li>
                <embed src="/tick.svg" type="" />
                History
              </li> */}
              <li>
                <embed src="/tick.svg" type="" />
                Astrology / Mythology
              </li>
              <li>
                <embed src="/tick.svg" type="" />
                More Coming Soon
              </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default hero