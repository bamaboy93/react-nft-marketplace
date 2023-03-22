import React from "react";
import Collection from "../../components/Collection";
import Container from "../../components/Container";
import Creators from "../../components/Creators";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Collection />
      <Creators />
    </Container>
  );
};

export default Home;
