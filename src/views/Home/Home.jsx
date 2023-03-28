import React from "react";
import Categories from "../../components/Categories";
import Collection from "../../components/Collection";
import Container from "../../components/Container";
import Creators from "../../components/Creators";
import Hero from "../../components/Hero";
import Highlight from "../../components/Highlight";
import Subscribe from "../../components/Subscribe";
import Tutorial from "../../components/Tutorial";

const Home = () => {
  return (
    <>
      <Container>
        <Hero />
        <Collection />
        <Creators />
        <Categories />
      </Container>
      <Highlight />
      <Container>
        <Tutorial />
        <Subscribe />
      </Container>
    </>
  );
};

export default Home;
