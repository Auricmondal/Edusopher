import Head from 'next/head'
import Landing from './landing'

export default function Home() {
  return (
    <div className='container'>
      <Head>
      <title>Edusopher | Sharing Knowledge</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Edusopher is an educational channel that introduce the confluence of knowledge and wisdom.We believe in sharing knowledge and our motto is 'SHARING KNOWLEDGE TO GAIN PROSPERITY' This channel serving you a full plate of knowledgeable and interesting topics,summery of books and many more, what you want to know.If you want to dive into the sea of knowledge and become an important member of our Edusopher family." />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta httpEquiv = "content-language" content = "en"/>
      </Head>
      <Landing/>
      
    </div>
  )
}
