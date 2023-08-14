import React from 'react'
import styles from "../styles/Landing.module.css";
import Image from 'next/image';
import { urlFor } from '../sanity'
import {PortableText} from '@portabletext/react'

const serelizers={
  normal:(props=any)=>(
    <p  {...props}/>
  ),
}


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
                  <Image height={30} width={20} src="/insta.svg" className={styles.insta} />
                </a>
                <p>|</p>
                <a
                  href="https://www.facebook.com/edusopher?mibextid=ZbWKwL"
                  target="_blank" rel="noreferrer"
                >
                  <Image height={30} width={10} src="/fb.svg" className={styles.fb} />
                </a>
                <p>|</p>
                <a
                  href="mailto:edusopher@gmail.com"
                  target="_blank" rel="noreferrer"
                >
                  <Image height={30} width={20} src="/email.svg" className={styles.email} />
                </a>
              </div>
            </div>
            <div className={styles.rightsec3}>
              <div>
              <PortableText 
                value={data.bio}
                components={serelizers}
          
            />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default about


