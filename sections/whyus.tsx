import React from 'react'
import styles from "../styles/Landing.module.css";
import Perks from '../component/perks'
const whyus = () => {
  return (
    <>
     {/* The elements of the WHY CHOOSE US section */}
     <div className={styles.section1}>
        <div className={styles.sec1cont}>
          <h2>Why us?</h2>
          <hr />
          <div className={styles.perkscont}>
           <Perks iconSrc={'/language.svg'} perkTitle={'Bilingual'} perkBrief={'On this website, you will benefit from two languages which are Bengali and English. This will help you choose your own language to fully understand the topic.'}/>
           <Perks iconSrc={'/book.svg'} perkTitle={'Easy to read'} perkBrief={'On this website, all articles are easily readable and understandable. It helps you able to access and understand information that affects your daily life.'}/>
           <Perks iconSrc={'/touch.svg'} perkTitle={'Clear concept'} perkBrief={'Here you will find ease of reading with full of depth knowledge, legibility, clarity of concept, its familiarity, and access to information. All these things expand your knowledge and make you grow higher.'}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default whyus