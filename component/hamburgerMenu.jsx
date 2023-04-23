import Link from "next/link";
import React from "react";
import stylesComp from "../styles/Comp.module.css";
import { useState } from "react";


const hamburgerMenu = ({setHamCheck}=props) => {
  const [isDropOpen, setIsDropOpen] = useState(false)

  const handleHamClose=()=>{
    setHamCheck(false);
    document.getElementById('hamOpenCheck').click()
  }
  const handleDropMenu=()=>{
    var impDrop= document.getElementById('hamCheck')
    impDrop.click()
  }
  const handleDropTrig=(e)=>{
    setIsDropOpen(e.target.checked)
  }
  
  return (
    <div className={` ${stylesComp.hamburgerMenu}`}>
      
      <ul className={stylesComp.upperHam}>
        <li onClick={handleHamClose}>
            <Link href="/"className={stylesComp.link} >Home
            </Link>
        </li>
        <li className={stylesComp.dropdown} onClick={handleDropMenu}>
              <span className={stylesComp.hamDrop}>
              <input type="checkbox" id="hamCheck" onClick={handleDropTrig}/>
              <span onClick={handleHamClose}>
              <Link href="/blogs" >
                  Blogs
              </Link>
              </span>
              <i className={stylesComp.arrow} ></i>
                </span>
              {isDropOpen?<ul className={`${stylesComp.dropdowncontent}`}>
                {/* <li onClick={handleHamClose}><Link href="/news" className={stylesComp.link}>News</Link></li> */}
                <li onClick={handleHamClose}><Link href="/philosophy" className={stylesComp.link}>Philosophy</Link></li>
                <li onClick={handleHamClose}><Link href="/government schemes" className={stylesComp.link}>Government Schemes</Link></li>
                {/* <li><Link href="/finance %26 economy" className={stylesComp.link}>Finance/ Economy</Link></li> */}
                <li onClick={handleHamClose}><Link href="/english" className={stylesComp.link}>English</Link></li>
                {/* <li onClick={handleHamClose}><Link href="/geography" className={stylesComp.link}>Geography</Link></li> */}
                {/* <li onClick={handleHamClose}><Link href="/history" className={stylesComp.link}>History</Link></li> */}
                <li onClick={handleHamClose}><Link href="/astrology %26 mythology" className={stylesComp.link}>Astrology/ Mythology</Link></li>
              </ul>:null}
            
        </li>
        </ul>
        <ul className={stylesComp.lowerHam}>
        <li onClick={handleHamClose}>
        <Link href="/#about" className={stylesComp.link}>About</Link>
        </li>
        <li onClick={handleHamClose}>
        <Link href="/#contact"className={stylesComp.link}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default hamburgerMenu;
