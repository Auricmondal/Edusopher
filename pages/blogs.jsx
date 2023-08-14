import React, { useEffect, useState } from 'react'
import { sanityClient, urlFor } from '../sanity'
import styles from '../styles/blogs.module.css'
import BlogCard from 'component/blogs/blogCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import Head from 'component/head'

const Blogs = ({posts,numberOfPosts}= props) => {
  const [data, setData] = useState(posts)
  const [postShowNum, setpostShowNum] = useState(20)
  const [hasMore, setHasMore] = useState(true)

  const getMorePosts= async () =>{
    
    const query= `*[_type == "post"] | order(_createdAt desc){
      _createdAt,
      categories->{
        title
      },
      language->{
        title
      },
       _id,
      title,
      author ->{
      name,
      image
    },
    description,
    slug,
    mainImage,
  }[$num-10...$num]`
  
  const newData = await sanityClient.fetch(query,{num:postShowNum});
  setpostShowNum(postShowNum+10);
  setData((data)=>[...data, ...newData]);
  }

  useEffect(() => {
    setHasMore(numberOfPosts > data.length ? true : false);
  }, [data]);
  
  return (
    <>
    <Head title={'All Blogs - Edusopher'} metadesc={'Welcome to the all blogs section of Edusopher here you can find all forms of blogs available in our website'}/>
    <div className={styles.blogs}>
      
      <div >
        <h1><b>Welcome To Blogs - All Blogs !</b></h1>
        </div>
        {/* Posts */}
        
        <InfiniteScroll
          className={styles.posts}
          dataLength={data.length}
        next={getMorePosts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
>
       {data&&data.map((post)=>( <BlogCard post={post}/>))}
       </InfiniteScroll>

    </div>
    </>
  )
}

export default Blogs

// This function gets called at build time
export async function getStaticProps() {
   const query1= `*[_type == "post"] | order(_createdAt desc){
    _createdAt,
    categories->{
      title
    },
    metadesc,
    language->{
      title
    },
     _id,
    title,
    author ->{
    name,
    image
  },
  description,
  slug,
  mainImage,
}[0...10]`
const query2=`*[_type=='post']`

  const data = await sanityClient.fetch(query2)
  
  const posts = await sanityClient.fetch(query1)
    return {
      props: {
        posts,
        numberOfPosts: data.length,
      },
      revalidate: 3600,
    }
  }