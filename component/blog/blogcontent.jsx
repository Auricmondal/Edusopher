import React from 'react'
import stylesBlog from '../../styles/blog.module.css'
import PortableText  from 'react-portable-text'
import Link from 'next/link'



const blogcontent = ({posts}=props) => {
  return (
    <div className={stylesBlog.main}>
        <PortableText 
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          content={posts.body}
          value={posts.body}
          serializers={
            {
              h1:(props= any)=>(
                <h1 className={stylesBlog.ph1} {...props}/>
              ),
              h2:(props= any)=>(
                <h2 className={stylesBlog.ph2} {...props}/>
              ),
              h3:(props= any)=>(
                <h3 className={stylesBlog.ph3} {...props}/>
              ),
              h4:(props= any)=>(
                <h4 className={stylesBlog.ph4} {...props}/>
              ),
              Bullet:({chlidren}= any)=>(
                <li className={stylesBlog.pli} >{chlidren}</li>
              ),
              url:({href, chlidren}= any)=>(
                <a className={stylesBlog.pa} href={href} >{chlidren}</a>
              ),
              normal:(props=any)=>(
                <p className={stylesBlog.pp} {...props}/>
              ),
              emphasis:(props=any)=>(
                <p className={stylesBlog.pe} {...props}/>
              ),
              quote:(props=any)=>(
                <blockquote className={stylesBlog.pq} {...props}/>
              ),
              marks: {
                internalLink: ({value, children}) => {
                  const {slug = {}} = value
                  const href = `/${slug.current}`
                  return <a href={href}>{children}</a>
                }
              }
              
            }
            
          }
            />
          </div>
  )
}

export default blogcontent