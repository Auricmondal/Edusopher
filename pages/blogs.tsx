import React from 'react'
import Link from '../node_modules/next/link'
import { sanityClient, urlFor } from '../sanity'
import {Posts} from '../typings'
import styles from '../styles/blogs.module.css'
import Head from 'next/head'

interface Props{
  posts:[Posts]
} 

const Blogs = ({posts}: Props) => {
  
  
  return (
    <div className={styles.blogs}>
      <Head>
        <title>Edusopher | All Blogs</title>
      </Head>
      <div >
        <h1><b>Welcome To Blogs - All Blogs !</b></h1>
        </div>
        {/* Posts */}
        <div className={styles.posts}>
        {posts&&posts.map((post)=>(
          <Link key={post._id} href={`/blogs/${post.slug.current}`}>
            <div className={styles.post}>
            {post.mainImage && <img src={
              urlFor(post.mainImage).url()
            } alt=""  className={styles.mainimg}/>}
            <div className={styles.cardcont}>
              <div>
                <p>{post.title}</p>
                <p>{post.description} by {post.author.name} on {new Date(post._createdAt).toLocaleDateString("en-GB", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })}</p>
              </div>
                <img className={styles.authorimg} src={
                  urlFor(post.author.image).url()
                } alt="" />
            </div>
            
            </div>
          </Link>
          
        ))}</div>

    </div>
  )
}

export default Blogs

// This function gets called at build time
export async function getStaticProps() {
   const query= `*[_type == 'post']{
     _createdAt,
    _id,
    title,
    author ->{
    name,
    image
  },
  description,
  slug,
  mainImage
  }`
  const posts = await sanityClient.fetch(query)
    return {
      props: {
        posts,
      },
    }
  }