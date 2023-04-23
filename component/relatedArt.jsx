import React from 'react'
import { GetStaticProps } from "next";
import BlogCard from './blogs/blogCard';
import styles from "../styles/blogs.module.css";
import stylesBlog from "../styles/blog.module.css";

const relatedArt = (props) => {
    const {posts}=props
  return (
    <>
        <h2 className={stylesBlog.h2Rel}>related articles</h2>
        <div className={styles.posts}>
        {posts&&posts.map((post)=>(
          
          <BlogCard post={post}/>
       
          ))}
          </div>
    </>
  )
}

export default relatedArt



  
  