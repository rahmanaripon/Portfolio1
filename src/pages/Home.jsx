import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../layout/Layout'
import Hero from "../components/Hero";
import MySkills from '../components/MySkills';


const Home = () => {
  return (
    <Layout title={"Home"}>
      <Hero />
      <MySkills />
      
    </Layout>
  );
}

export default Home