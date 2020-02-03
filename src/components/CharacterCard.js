import React from "react";
import Styled from "styled-components";
import {keyframes} from 'styled-components';

const Styleddiv=Styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 max-width: 500px;
 margin: 0 auto;
 align-items: center;

 img{
  width: 150px;
	height: 150px;
	box-sizing: border-box;
	border: 5px white solid;
	border-radius: 50%;
	overflow: hidden;
	box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
	transform: translatey(0px);
	animation: float 6s ease-in-out infinite;
	img { width: 100%; height: auto; }
 }


 @keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	70% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}
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

