import Link from 'next/link'
import React from 'react'
import styles from "../styles/Landing.module.css";
const hero = () => {
  return (
    <>
     {/* The elements of Hero Section is here */}
     <header className={styles.hero}>
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
                <a>Let&apos;s Gets Started !</a>
              </Link>
            </div>
          </div>
          {/* Right Part of the Hero section goes here */}

          <div className={styles.right}>
            <img src="/Herophoto1.png" alt="This is a photo" />
            <img src="/Herophoto2.png" alt="This is a photo" />

            {/* The table for WE GOT YOU COVERD GOES HERE */}
            <div className={styles.list}>
              <h3 className={styles.listitems}>We got you covered</h3>
              <hr />
              {/* <p>
                <embed src="/tick.svg" type="" />
                News
              </p> */}
              <p>
                <embed src="/tick.svg" type="" />
                Philosophy{" "}
              </p>
              <p>
                <embed src="/tick.svg" type="" />
                Government Schemes{" "}
              </p>
              {/* <p>
                <embed src="/tick.svg" type="" />
                Finance/ Economy
              </p> */}
              <p>
                <embed src="/tick.svg" type="" />
                English
              </p>
              {/* <p>
                <embed src="/tick.svg" type="" />
                Geography
              </p> */}
              {/* <p>
                <embed src="/tick.svg" type="" />
                History
              </p> */}
              <p>
                <embed src="/tick.svg" type="" />
                Astrology / Mythology
              </p>
              <p>
                <embed src="/tick.svg" type="" />
                More Coming Soon
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default hero