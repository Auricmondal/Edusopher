import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { sanityClient } from "../sanity";
import styles from "../styles/blogs.module.css";
import BlogCard from "component/blogs/blogCard";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from "react";
import Head from "component/head";

const Slug = ({ posts,numberOfPosts }= props) => {
  const [data, setData] = useState(posts)
  const [postShowNum, setpostShowNum] = useState(20)
  const [hasMore, setHasMore] = useState(true)
  const router = useRouter();
  const { slug } = router.query;

  const getMorePosts= async () =>{
    
    const query= `*[_type == "post"&& categories->title==$slug]{
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
  
  const newData = await sanityClient.fetch(query,{num:postShowNum,slug:slug});
  setpostShowNum(postShowNum+10);
  setData((data)=>[...data, ...newData]);
  }

  useEffect(() => {
    setHasMore(numberOfPosts > data.length ? true : false);
  }, [data]);
  useEffect(() => {
    setData(posts)
  }, [router])
   

  return (
    <>
    <Head title={`${slug} - edusopher`} metadesc={`Welcome to the ${slug} section of Edusophers`}/>
    <div className={styles.blogs}>

      <h1>{slug}</h1>
      {!posts[0]?<div className={styles.comingSoon}>Hold Tight! Coming soon!....</div>:
      <InfiniteScroll
      className={styles.posts}
      dataLength={data.length}
    next={getMorePosts}
    hasMore={hasMore}
    loader={<h4>Loading...</h4>}
>
        {data&&data.map((post)=>(
          
           <BlogCard post={post}/>
        
           ))}
      </InfiniteScroll>
      } 
    </div>
    </>
  );
};

export default Slug;

export const getStaticPaths = async () => {
  const query = `*[_type == 'post']{
    categories->{
      title
    },
   } `;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((posts) => ({
    params: {
      slug: posts.categories.title,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps= GetStaticProps = async ({ params }) => {
  const query1 = `*[_type == "post"&& categories->title==$slug]{
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
    }[0...10]
    `;
    const query2=`*[_type == "post"&& categories->title==$slug]`
  const data = await sanityClient.fetch(query2, {
    slug: params?.slug,
  });
  const posts = await sanityClient.fetch(query1, {
    slug: params?.slug,
  });
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts,
      numberOfPosts: data.length,
    },
    revalidate: 3600,
  };
};
