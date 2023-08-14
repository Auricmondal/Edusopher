//The navigation bar code lies Below

import React, { useState } from "react";
import Link from "next/link";
import stylesComp from "/styles/Comp.module.css";
import Image from "next/image";
import dynamic from 'next/dynamic'
const HamburgerMenu = dynamic(() => import('./hamburgerMenu'))

const Navbar = () => {
  const [hamCheck, setHamCheck] = useState(false)
  
  const handleHam =(e)=>{
    setHamCheck(e.target.checked)
  }
  
  return (
    <>
    <input type="checkbox" id="hamOpenCheck" className={stylesComp.hamIcon} onClick={handleHam} />
    <nav className={`${stylesComp.navbar}`}>
      <ul className={stylesComp.leftNav}>
        <li><Link href={'/'}><Image src={'/logo.svg'} width={70} height={50} alt=""/></Link></li>
      </ul >
      <ul className={stylesComp.rightNav}>
        <li>
            <Link href="/" className={stylesComp.link}>
             Home
            </Link>
        </li>
        
        <li className={stylesComp.dropdown}>
        
              <Link href="/blogs">
                
                  Blogs <i className={stylesComp.arrow}></i>
                
              </Link>
              <ul className={`${stylesComp.dropdowncontent}`}>
                
                {/* <li><Link href="/news" className={stylesComp.link}>News</Link></li> */}
                <li><Link href="/philosophy" className={stylesComp.link}>Philosophy</Link></li>
                <li><Link href="/government schemes" className={stylesComp.link}>Government Schemes</Link></li>
                {/* <li><Link href="/finance %26 economy" className={stylesComp.link}>Finance/ Economy</Link></li> */}
                <li><Link href="/english" className={stylesComp.link}>English</Link></li>
                {/* <li><Link href="/geography" className={stylesComp.link}>Geography</Link></li> */}
                {/* <li><Link href="/history" className={stylesComp.link}>History</Link></li> */}
                <li><Link href="/dream dictionary" className={stylesComp.link}>Dream Dictonary</Link></li>
                <li><Link href="/astrology %26 mythology" className={stylesComp.link}>Astrology/ Mythology</Link></li>
              </ul>
            
        </li>
        <li>
        <Link href="/#about" className={stylesComp.link}>About</Link>
        </li>
        <li>
        <Link href="/#contact"className={stylesComp.link}>Contact</Link>
        </li>
      </ul>
    </nav>
    
    {hamCheck?<HamburgerMenu setHamCheck={setHamCheck}/>:null}
    </>
  );
};

export default Navbar;
