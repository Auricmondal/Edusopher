import Link from "next/link";
import React from "react";
import { urlFor } from '../../sanity'
import stylesBlogs from "../../styles/blogs.module.css";
import Image from "next/image";
import Tags from "./tags";
import Author from "../author";


const blogCard = ({post}=props) => {
  return (
    <Link key={post._id} href={`/blogs/${post.slug.current}`}>
      <div className={stylesBlogs.blogCard}>
        <div className={stylesBlogs.cardMainImg}>
          <Image
            src={post.mainImage?urlFor(post.mainImage).url():'/demoimg.jpg'}  
            alt={post.mainImage.alt?post.mainImage.alt:null}
            width={1000}
            height={600}
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
        <p className={stylesBlogs.desc}>Sunt aspernatur perspiciatis! Repudiandae neque tempora esse consequuntu...</p>
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
