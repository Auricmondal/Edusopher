import React from 'react'
import styles from "../styles/Landing.module.css";
import Image from 'next/image';
import { urlFor } from '../sanity'


const about = ({ data }=props) => {

  return (
    <>
    {/* The elements of the ABOUT section (Landing Page) */}
    <div id="about" className={styles.section3}>
        <div className={styles.container}>
          <h2>About</h2>
          <hr />
          <div className={styles.subcont}>
            <div className={styles.leftsec3}>
              <Image alt='' src={urlFor(data.image).url()} className={styles.avatar} height={200} width={200}/>
              <div className={styles.icons}>
                <a
                  href="https://instagram.com/edusopher?igshid=ZDdkNTZiNTM="
                  target="_blank" rel="noreferrer"
                >
                  <img src="/insta.svg" className={styles.insta} />
                </a>
                <p>|</p>
                <a
                  href="https://www.facebook.com/edusopher?mibextid=ZbWKwL"
                  target="_blank" rel="noreferrer"
                >
                  <img src="/fb.svg" className={styles.fb} />
                </a>
                <p>|</p>
                <a
                  href="mailto:edusopher@gmail.com"
                  target="_blank" rel="noreferrer"
                >
                  <img src="/email.svg" className={styles.email} />
                </a>
              </div>
            </div>
            <div className={styles.rightsec3}>
              <div>
               <p>Welcome to Edusopher Family!!!</p> <br />
               <p> Edusopher is an educational channel that introduce the
                confluence of knowledge and wisdom.We believe in sharing
                knowledge and our motto is &quot;SHARING KNOWLEDGE TO GAIN
                PROSPERITY&quot;. </p>
                This channel serving you a full plate of knowledgeable and
                interesting topics,summery of books and many more, what you want
                to know.If you want to dive into the sea of knowledge and become
                an important member of our Edusopher family.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default about


