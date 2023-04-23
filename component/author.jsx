import React from 'react'
import stylesComp from "../styles/Comp.module.css";
import { urlFor } from '../sanity'
import Image from 'next/image';
const author = ({post}=props) => {
  return (
    <div className={stylesComp.authorInfo}>
      <Image width={40} height={40} className={stylesComp.authorimg} src={
                  urlFor(post.author.image).url()
                }  alt="" />
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