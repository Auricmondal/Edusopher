import React from 'react'
import stylesBlog from '../../styles/blog.module.css'
import stylesBlogs from '../../styles/blogs.module.css'
import Author from 'component/author'
import BlogContent from 'component/blog/blogcontent'
import Tags from 'component/blogs/tags'
import dynamic from 'next/dynamic'
const Reference = dynamic(() => import('component/reference'))
const RelatedArt = dynamic(() => import('component/relatedArt'))
const Wcomments = dynamic(() => import('./wcomments'))
const CommentS = dynamic(() => import('../Comments'))


const sectionui = (props) => {
    const {type,posts}=props
  return (
    <div className={`${type=='index'?stylesBlog.indexCont:null} ${stylesBlog.sectionui}`}>
        {type=='index'?<div >
            <h2>Index</h2>
            <ul className={stylesBlog.index}>
              {posts.index&&posts.index.map((cont)=>(
                  <li>{cont}</li>
              ))}
                
            </ul>
        </div>:null}
        {type=='title'?<h1>{posts.title}</h1>:null}
        {type=='uploadinfo'?<div className={stylesBlog.upldInfoCont}>
            <Author post={posts}/>
            <div className={`${stylesBlog.inBlogTag} ${stylesBlogs.tagsCont}`}>
            <Tags type={'category'} name={posts.categories.title}/>
            <Tags type={'lang'} name={posts.language.title}/>
      </div>
        </div>:null}
        {type=='blogContent'?<BlogContent posts={posts}/>:null}
        {type=='referrnces'?
            <Reference posts={posts}/>
        :null}
        {type=='ads'?<h2>Welcome to Edusopher</h2>:null}
        {type=='commentInp'?<Wcomments _id={posts._id}/>:null}
        {type=='commentDisp'?<CommentS _id={posts._id}/>:null}
        {type=='relatedArticles'?<RelatedArt posts={posts}/>:null}
    </div>
  )
}

export default sectionui