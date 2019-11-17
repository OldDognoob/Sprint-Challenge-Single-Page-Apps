import React from "react";
import Styled from "styled-components";

const Input=Styled.input`
 display: flex;
 justify-content: center;
 background-color:lightblue;
`;



export default function SearchForm(props) {
 
  return (
    <section className="search-form">
     <Input onChange={props.changeHandler}       type="text" name="text"></Input>
    </section>
  );
}
