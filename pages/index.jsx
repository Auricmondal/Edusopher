import Whyus from '../sections/whyus'
import Hero from '../sections/hero'
import Head from '../component/head'
import { sanityClient } from 'sanity'
import dynamic from 'next/dynamic'
const Contact = dynamic(() => import('../sections/contact'))
const About = dynamic(() => import('../sections/about'))

export default function Home({ data }=props) {
  return (
    <>
      <Head title={'Edusopher | sharing knowledge'}/>
      <Hero/>
      <Whyus/>
      <Contact/>
      <About data={data}/>
    </>
  )
}


export async function getStaticProps() {
  const query=`*[_type == "author"][0]{
    name,
    image,
    bio
  }`
  const data = await sanityClient.fetch(query)
  
  return {
    props: {
      data,
    },
  };

}