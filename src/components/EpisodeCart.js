import React from "react";

import styled from 'styled-components';


const StyledEpisodeCard= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin: 15px auto;
overflow: hidden;
border: 3px solid #1CB5E0;
width:75%;
width: 100%;
height: 100%;




&:hover {
    transform: scale()(1.05);
    transition: easy-in-out 0.14s;
    opacity:1
}

h1 {
    font-size: 2rem;
    color: ${props => props.inputColor || "#f64f59"};
    text-decoration: underline ${props=> props.inputColor || "#FDC830"};
    font-size: 24px;
	margin: 10px 0 0 0;
	font-weight: lighter;
	text-transform: uppercase;
	
}

`;


export default function EpisodeCard(props) {
    return(
        <div key={props.episodeCard.id}>
        <h1>{props.episodeCard.name}</h1>
        <StyledEpisodeCard>
        <div>{props.episodeCard.date_creation}</div>
        <div>{props.episodeCard.first_date}</div>
        </StyledEpisodeCard> 
        </div>
    );
}

