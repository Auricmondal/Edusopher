//The navigation bar code lies Below

import React, { useState } from "react";
import Link from "next/link";
import styles from "/styles/Comp.module.css";
const Navbar = () => {
  const [hamBtn, setHamBtn] = useState(`${styles.hambergur}`);
  const [isTrue, setIstrue] = useState(false);
  const [isTrueD, setIsTrueD] = useState(false)
  const [ddBtn, setDdBtn] = useState(`${styles.arrow} ${styles.off}`)
  const [dropDon, setDropDon] = useState(`${styles.dropdowncontent}`)
  const [mobNav, setMobNav] = useState(`${styles.mobNav}`)
  const hambergur = () => {
    if (!isTrue) {
      setHamBtn(`${styles.hambergur} ${styles.isActive}`);
      setMobNav(`${styles.mobNav} ${styles.navopen}`)
      setIstrue(true);
    } else {
      setIstrue(false);
      setHamBtn(`${styles.hambergur}`);
      setMobNav(`${styles.mobNav}`);
    }
  };
  const dropdown=()=>{
    if(!isTrueD){
      setDdBtn(`${styles.arrow}`)
      setDropDon(`${styles.dropdowncontent}  ${styles.on}`)
      setIsTrueD(true)
    }
    else{
      setDdBtn(`${styles.arrow} ${styles.off}`)
      setDropDon(`${styles.dropdowncontent}`)
      setIsTrueD(false)
    }
  }

  const menu=()=>{
    setDdBtn(`${styles.arrow} ${styles.off}`)
    setDropDon(`${styles.dropdowncontent}`)
    setHamBtn(`${styles.hambergur}`)
    setIsTrueD(false)
    setIstrue(false)
    setMobNav(`${styles.mobNav}`)
  }
  return (
    <>
    <nav className={styles.navbar}>
      {/* The left part of the navigation bar containing the logo and home,blogs,contact and about */}

      <div className={`${styles.container} ${styles.navMob}`}>
        <div className={styles.leftnav}>
          <Link href="/">
            <img src="/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* The right part of the navigation bar containing the HAMBERGUR LOGO and Signup and Log in */}

        <div className={styles.rightnav}>
          <div className={`${styles.midnav}`}>
            <Link href="/">
              <a className={styles.link}>Home</a>
            </Link>
            <div className={styles.dropdown}>
              <Link href="/blogs">
                <a>
                  Blogs <i className={styles.arrow}></i>
                </a>
              </Link>
              <div className={`${styles.dropdowncontent} `}>
                <Link href="/news">
                  <a className={styles.link}>News</a>
                </Link>
                <Link href="/philosophy">
                  <a className={styles.link}>Philosophy</a>
                </Link>
                <Link href="/goverment schemes">
                  <a className={styles.link}>Goverment Schemes</a>
                </Link>
                <Link href="/finance %26 economy">
                  <a className={styles.link}>Finance/ Economy</a>
                </Link>
                <Link href="/english">
                  <a className={styles.link}>English</a>
                </Link>
                <Link href="/geography">
                  <a className={styles.link}>Geography</a>
                </Link>
                <Link href="/history">
                  <a className={styles.link}>History</a>
                </Link>
                <Link href="/astrology %26 mythology">
                  <a className={styles.link}>Astrology/ Mythology</a>
                </Link>
              </div>
            </div>
            <Link href="/#about">
              <a className={styles.link}>About</a>
            </Link>
            <Link href="/#contact">
              <a className={styles.link}>Contact</a>
            </Link>
          </div>
          <button className={hamBtn} onClick={hambergur}>
            <div className={styles.bar}></div>
          </button>
        </div>
      </div>
      
     
    </nav>
    {/* To be Fixed Later */}
    <div className={mobNav}>
    <Link   href="/">
            <a onClick={menu}className={styles.link}>Home</a>
          </Link>
      <div className={styles.dropdown}>
            <Link href="/blogs">
              <a onClick={menu}>
                Blogs 
              </a>
            </Link>
            <i onClick={dropdown} className={ddBtn}></i>
            <div className={dropDon}>
              <Link href="/news">
                <a onClick={menu}className={styles.link}>News</a>
              </Link>
              <Link href="/philosophy">
                <a onClick={menu}className={styles.link}>Philosophy</a>
              </Link>
              <Link href="/goverment schemes">
                <a onClick={menu}className={styles.link}>Goverment Schemes</a>
              </Link>
              <Link href="/finance %26 economy">
                <a onClick={menu}className={styles.link}>Finance/ Economy</a>
              </Link>
              <Link href="/english">
                <a onClick={menu}className={styles.link}>English</a>
              </Link>
              <Link href="/geography">
                <a onClick={menu}className={styles.link}>Geography</a>
              </Link>
              <Link href="/history">
                <a className={styles.link}>History</a>
              </Link>
              <Link href="/astrology %26 mythology">
                <a onClick={menu}className={styles.link}>Astrology/ Mythology</a>
              </Link>
            </div>
          </div>
          <Link href="/#about">
            <a onClick={menu}className={styles.link}>About</a>
          </Link>
          <Link href="/#contact">
            <a onClick={menu}className={styles.link}>Contact</a>
          </Link>
          </div></>
  );
};

export default Navbar;
