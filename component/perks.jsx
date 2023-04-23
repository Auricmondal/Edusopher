import React from 'react'
import styles from "../styles/Landing.module.css";
const perks = (props) => {
    const {iconSrc,perkTitle,perkBrief}=props
  return (
    <div className={styles.perks} key={perkTitle}>
    <embed className={styles.content} src={iconSrc} type="" />
    <h4>{perkTitle}</h4>
    <hr />
    <p>
    {perkBrief}
    </p>
  </div>
  )
}

export default perks