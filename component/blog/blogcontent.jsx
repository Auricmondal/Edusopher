import React from 'react'
import stylesBlog from '../../styles/blog.module.css'
import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from 'sanity'

const serelizers={
  
    h1:(props= any)=>(
      <h1 {...props}/>
    ),
    h2:(props= any)=>(
      <h2 {...props}/>
    ),
    h3:(props= any)=>(
      <h3 {...props}/>
    ),
    h4:(props= any)=>(
      <h4 {...props}/>
    ),
    h5:(props= any)=>(
      <h5 {...props}/>
    ),
    h6:(props= any)=>(
      <h6 {...props}/>
    ),
    Bullet:({chlidren}= any)=>(
      <li >{chlidren}</li>
    ),
    normal:(props=any)=>(
      <p  {...props}/>
    ),
    emphasis:(props=any)=>(
      <p  {...props}/>
    ),
    quote:(props=any)=>(
      <blockquote  {...props}/>
    ),
    types:{
      image: ({ value }) => (
        <div>
        <Image src={urlFor(value.asset).url()} width={1920} height={1289} alt={value.alt} />
        </div>
      ),
    },
 

  marks: {
    link: ({value, children}) =>value.blank?<a href={value.href} target="_blank" rel="noopener noreferrer">{children}</a>:<a href={value.href}>{children}</a>,
    internalLink:({value, children}) =><a href={`/blogs/${value.slug.current}`} target='_blank' rel="noopener noreferrer">{children}</a>
  }
}

const blogcontent = ({posts}=props) => {
  return (
    <div className={stylesBlog.main}>
        <PortableText 
          value={posts.body}
          components={serelizers}
          
            />
          </div>
  )
}

export default blogcontent