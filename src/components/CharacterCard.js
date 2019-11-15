import React from "react";

import CharacterList from './CharacterList'

import styled from "styled-components";

const StyledCard = styled.div`
  width: 30vw;
  height: auto;
  border: 1px solid;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 100%;
  }
`;

export default function CharacterCard(props) {
  console.log(props);
  return <StyledCard>todo: character</StyledCard>;
}




