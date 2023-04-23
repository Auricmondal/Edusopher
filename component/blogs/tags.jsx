import React from 'react'
import stylesBlogs from "../../styles/blogs.module.css";

const tags = (props) => {
  const {type,name}=props
  return (
    <div className={`${type=='lang'?stylesBlogs.langTag:stylesBlogs.catTag} ${stylesBlogs.tags}`}>
      {name}
    </div>
  )
}

export default tags