import React from "react";
import Styled from "styled-components";

const Input=Styled.input`
 display: flex;
 justify-content: center;
 background-color:lightblue;
`;

const Section=Styled.section`
display: flex;
justify-content: center;

`;

export default function SearchForm(props) {
 
  return (
    <Section className="search-form">
     <Input onChange={props.changeHandler}       type="text" name="text"></Input>
    </Section>
  );
}
