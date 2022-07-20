import type { NextPage } from "next";
import Head from "next/head";
import { Game } from "../components/Game";
import { Nav } from "../components/Nav";
import { SolutionWordProvider } from "../components/SolutionWordContext";
import { useEffect } from "react";

const Home: NextPage = () => {

  
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
