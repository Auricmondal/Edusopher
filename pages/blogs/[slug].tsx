import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Posts } from '../../typings';
import {sanityClient, urlFor} from '../../sanity'
import PortableText  from 'react-portable-text'
import {useForm, SubmitHandler} from "react-hook-form"
import { useState } from 'react';
import styles from '../../styles/blog.module.css'

interface IFormInput{
  _id:string;
  name:string;
  email:string;
  comment: string;
}

interface Props{
  posts : Posts;
}

const Slug = ({posts}: Props) => {

  
 const [submitted, setSubmitted]= useState(false)
  const {register, handleSubmit, formState:{errors},}= useForm<IFormInput>();
const onSubmit : SubmitHandler<IFormInput>= async(data)=>{
  await fetch('/api/createComment',{
    method:'POST',
    body:JSON.stringify(data)
  }).then(()=>{
      // console.log(data);
      setSubmitted(true)
      
  }).catch((err)=>{
      console.log(err)
      setSubmitted(false)
  })
};

    const toUpFirst=(name) =>{
        if(name)
        return name.charAt(0).toUpperCase() + name.slice(1);
      }

    return (<>
    <Head>
      <title>Edusopher | {toUpFirst(posts.slug.current)}</title>
    </Head>

    <div className="content">
      <div className="index"></div>
      <div className={styles.mainbody}>
      {posts.mainImage && <img className={styles.mainimg} src={
                urlFor(posts.mainImage).url()
              } alt="" />}

              <article>
                <h1>{posts.title}</h1>
                <h2>{posts.description}</h2>
                <div className={styles.author}>
                  <img className={styles.authorimg} src={urlFor(posts.author.image).url()} alt="Image of Author" />
                  <p>Blog post by {posts.author.name} - {new Date(posts._createdAt).toLocaleDateString("en-GB", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })} </p>
                </div>


                  <div className={styles.main}>
                    <PortableText 
                      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                      content={posts.body}
                      serializers={
                        {
                          h1:(props: any)=>(
                            <h1 className={styles.ph1} {...props}/>
                          ),
                          h2:(props: any)=>(
                            <h2 className={styles.ph2} {...props}/>
                          ),
                          h3:(props: any)=>(
                            <h3 className={styles.ph3} {...props}/>
                          ),
                          h4:(props: any)=>(
                            <h4 className={styles.ph4} {...props}/>
                          ),
                          Bullet:({chlidren}: any)=>(
                            <li className={styles.pli} >{chlidren}</li>
                          ),
                          link:({href, chlidren}: any)=>(
                            <a className={styles.pa} href={href} >{chlidren}</a>
                          ),
                          normal:(props:any)=>(
                            <p className={styles.pp} {...props}/>
                          )
                        }

                      }

                    />
                  </div>
              </article>
          <hr />
          <div className={styles.wComment}>
          {submitted?(
            <div className={styles.onsub}>
              <h2>Submitted Successfully!</h2>
              <p>The Comment Will Appear after Approval</p>
            </div>
          ):
        (<form onSubmit={handleSubmit(onSubmit)} >
        <input  {...register("_id")} type="hidden" name='_id' value={posts._id}/>
       <div> 
         <input className={styles.name} {...register("name")} required placeholder=" " type="text" name="name" id="name" />
        <label className={styles.nameT} htmlFor="name">Name</label>
        </div>  
        <div> 
          <input className={styles.email} {...register("email")}required placeholder=" "  type="email" name="email" id="email" />
        <label className={styles.emailT} htmlFor="email">email</label>
        </div>    
        <div> 
          <textarea className={styles.comment} {...register("comment")} required placeholder=" " name="comment" id="comment" rows={10}/>
        <label className={styles.commentT} htmlFor="comment">Comment</label>
        </div>
        <input type="submit" name="submit" id="submit" value='comment'/>
      </form>)}
      </div>
          
          {/* Comments */}
          <main className={styles.sComments}>
            <h3>Comments</h3>
            <hr />
            
            {posts.comments&&(posts.comments.map((comment)=>(
              <div>
                <p><span>{comment.name}</span>: <span>{comment.comment}</span></p>
                <hr />
              </div>
            )))}
          </main>
            
      </div>
    </div>
    
    </>
    );
  }
  
  export default Slug
  
  export const getStaticPaths= async ()=>{
    const query = `*[_type == 'post']{
      slug,
     } `;
  
  
    const posts=  await sanityClient.fetch(query);
  
     const paths = posts.map((posts: Posts)=>({
       params:{
         slug: posts.slug.current,
       }
     }));
  
  
    return {
      paths,
      fallback: 'blocking'
    }
    }
  
    export const getStaticProps: GetStaticProps= async ({params})=>{
        const query = `*[_type == "post" && slug.current ==$slug][0]{
          _createdAt,
           _id,
          title,
          author ->{
          name,
          image
        },
        'comments':*[_type == "comment" && post._ref==^._id && approved==true],
        description,
        slug,
        mainImage,
        body
      }
      `;
      
        const posts=  await sanityClient.fetch(query,{
          slug: params?.slug,
        });
        if(!posts){
          return{
            notFound: true
          }
        }
        return {
          props: {
            posts,
          },
        }
        }