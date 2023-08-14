import Link from "next/link";
import React from "react";
import { urlFor } from '../../sanity'
import stylesBlogs from "../../styles/blogs.module.css";
import Image from "next/image";
import Tags from "./tags";
import Author from "../author";


const blogCard = ({post}=props) => {
  const newDesc=post.metadesc?.slice(0,30)
  return (
    <Link key={post._id} href={`/blogs/${post.slug.current}`}>
      <div className={stylesBlogs.blogCard}>
        <div className={stylesBlogs.cardMainImg}>
          <Image
            src={post.mainImage? (urlFor(post.mainImage).url()):'/demoimg.webp'}  
            alt={post.mainImage && post.mainImage.alt?post.mainImage.alt:''}
            width={600}
            height={200}
            className={stylesBlogs.mainimg}
          />
        </div>
      <div>
      <div className={stylesBlogs.tagsCont}>
        <Tags type={'category'} name={post.categories.title}/>
        <Tags type={'lang'} name={post.language.title}/>
      </div>
      <div className={stylesBlogs.cardcont}>
        <h3>{post.title}</h3>
        <p className={stylesBlogs.desc}>{newDesc}</p>
      </div>
      <div className={stylesBlogs.bottomSec} >
      <Author post={post}/>
      <hr />
      <button><span>read article</span><span></span></button>
      </div>
      </div>
      </div>
    </Link>
  );
};

export default blogCard;
