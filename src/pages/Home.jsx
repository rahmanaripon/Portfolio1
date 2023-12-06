import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../layout/Layout'
import Hero from "../components/Hero";


const Home = () => {
  return (
    <Layout title={"Home"}>
      <Hero />
    </Layout>
  );
}

export default Home