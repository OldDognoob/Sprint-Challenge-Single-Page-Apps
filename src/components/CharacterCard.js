import React from "react";
import Styled from "styled-components";

export default function CharacterCard(props) {
  return (
  <div>
  <div>{props.data.name}</div>
  <div>{props.data.gender}</div>
  <div><img src={props.data.image}/></div>
  
  </div>
  )

}
