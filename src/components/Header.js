import React from "react";
import Styled from "styled-components";

import {NavLink} from "react-router-dom";

const Button = Styled.button`
display: flex;
margin-bottom: 10px;
margin-top: 15px;
margin: 0 auto;
font-family: ;
color: white;
width: 150px;
height: 35px;
background: linear-gradient(to right, "#c471ed","#f64f59");
text-align: center;
color: black;
box-shadow: 0px 0px 5px 1px black;
cursor: pointer;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavLink to="/characters" className="NavLink"><Button>Characters</Button></NavLink>
      <NavLink to="/episode" className="NavLink"><Button>Episode</Button></NavLink>
      <NavLink to="/location" className="NavLink"><Button>Location</Button></NavLink>
    </header>
  );
}


