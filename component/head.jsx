import Head from 'next/head'
import React, { useEffect } from 'react'
import { urlFor } from 'sanity'

const head = (props) => {
  const { title , metadesc , ogImg }=props
  useEffect(() => {
    let titleAr=[];
    let title=document.querySelector('title').innerHTML;
    titleAr=title.split(' ')
    for (let i = 0; i < titleAr.length; i++) {
      titleAr[i] = titleAr[i].charAt(0).toUpperCase() + titleAr[i].slice(1) ;
      
    }
    document.querySelector('title').innerHTML=titleAr.join(' ');
   
  }, [])
  
 
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{title}</title>
        <meta name=" description" content= {metadesc} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metadesc} />
        {ogImg&&<meta property="og:image" content={urlFor(ogImg).url()} />}        
        
    </Head>    
  )
}

export default head