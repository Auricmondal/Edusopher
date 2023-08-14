import React from 'react'
import stylesComp from "../styles/Comp.module.css";
import { urlFor } from '../sanity'
import Image from 'next/image';
const author = ({post}=props) => {
  return (
    <div className={stylesComp.authorInfo}>
      <div className={stylesComp.autimgCont}>
      <Image  layout='fill' className={stylesComp.authorimg} src={
                  urlFor(post.author.image).url()
                }  alt="" />
      </div>
      <div>
      <h4>{post.author.name}</h4>
      <p>Published on {new Date(post._createdAt).toLocaleDateString("en-GB", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })}</p>
      </div>
      </div>
  )
}

export default author