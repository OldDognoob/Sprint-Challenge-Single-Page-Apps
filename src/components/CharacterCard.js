import React from "react";
import Styled from "styled-components";

const Styleddiv=Styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 max-width: 500px;
 margin: 0 auto;
 align-items: center;
`;

export default function CharacterCard(props) {
  return (
  <Styleddiv>
  <div>{props.data.name}</div>
  <div>{props.data.gender}</div>
  <div><img src={props.data.image} alt='dead'/></div> 
  </Styleddiv>
  )

}
