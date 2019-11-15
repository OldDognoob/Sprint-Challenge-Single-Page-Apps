import React from "react";



import styled from "styled-components";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <StyledHeadline>Welcome to the ultimate fan site!</StyledHeadline>
        <StyledImage
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}


const StyledImage = styled.img `
  display: block;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1000px;
`;

const StyledHeadline = styled.h1`
  font-size: 25px;
`;

const StyledHeader = styled.header`
text-align:center;
`;