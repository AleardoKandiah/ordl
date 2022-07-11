import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';

const Home: NextPage = () => {
  // API key
  useEffect(() => {
    Cohere.init("1MH_");
  }, [])
  
  return (
   <div>
     <Head>
      <title>ordle</title>
      <meta name='description' content='Guess the secret word '/>
      <link rel="icon" href="/favicon.ico" />
      <meta name='viewport' content='width-device-width, initial-scale=1'/>
     </Head>
    <main>
      <SolutionWordProvider>
        <Nav/>
        <Game/>
      </SolutionWordProvider>
    </main>
   </div>

     
  );
};

export default Home;
