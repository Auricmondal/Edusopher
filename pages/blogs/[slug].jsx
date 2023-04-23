import { GetStaticProps } from 'next';
import {sanityClient,urlFor} from '../../sanity'
import stylesBlog from '../../styles/blog.module.css'
import Image from 'next/image'
import Sectionui from '../../component/blog/sectionui'
import Head from 'component/head';




const Slug = ({posts,relArt}=props) => {
    return (<>
    <Head title={posts.title} metadesc={posts.metadesc} ogImg={posts.mainImage}/>
    <div className={stylesBlog.blog}>
        <div className={stylesBlog.mainImgCont}>
        <Image src={posts.mainImage?urlFor(posts.mainImage).url():'/demoimg.jpg'} alt={posts.mainImage && posts.mainImage.alt?posts.mainImage.alt:null} width={1000} height={1000} quality={100}/>
        </div>
          <Sectionui type={'index'} posts={posts}/>
        <div className={stylesBlog.mainAndAds}>
          
          <div className={stylesBlog.mainBody}>
            <Sectionui type={'title'} posts={posts}/>
            <Sectionui type={'uploadinfo'} posts={posts}/>
            <Sectionui type={'blogContent'} posts={posts}/>
            <Sectionui type={'referrnces'} posts={posts}/>
          </div>
          <div className={stylesBlog.ads}> <Sectionui type={'ads'}/></div>
        </div>
        <div className="commentInp"> <Sectionui type={'commentInp'} posts={posts}/></div>
        <div className="commentDisp"> <Sectionui type={'commentDisp'} posts={posts}/></div>
        <div className="relatedArticles"> <Sectionui type={'relatedArticles'} posts={relArt}/></div>
        <div className="ads"> <Sectionui/></div>
    </div>

    </>
    );
  }
  
  export default Slug
  
  export const getStaticPaths= async ()=>{
    const query = `*[_type == 'post']{
      categories->{
        title
      },
      slug,
     } `;
  
     
    const posts=  await sanityClient.fetch(query);
     const paths = posts.map((posts)=>({
       params:{
         slug: posts.slug.current,
       },
     }));
  
  
    return {
      paths,
      fallback: 'blocking'
    }
    }
  
    export const getStaticProps= GetStaticProps= async ({params})=>{
        const query1 = `*[_type == "post" && slug.current ==$slug][0]{
          _createdAt,
           _id,
          title,
          index,
          reference,
          categories->{
            title
          },
          language->{
            title
          },
          author ->{
          name,
          image
        },
        description,
        slug,
        mainImage,
        body
      }
      `;
      
      
        const posts=  await sanityClient.fetch(query1,{
          slug: params?.slug,
        });
        const query2 = `*[_type == "post" && categories->title ==$cat && slug.current!=$slug][0...5]{
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
      }
      `;
      const cat=posts.categories.title;
      const relArt=  await sanityClient.fetch(query2,{
        slug:params?.slug,
        cat,
      });
        if(!posts){
          return{
            notFound: true
          }
        }
        return {
          props: {
            posts,
            relArt,
            
          },

          revalidate: 3600,
        }
        }