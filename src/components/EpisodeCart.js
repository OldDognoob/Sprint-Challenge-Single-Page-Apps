import React from "react";

export default function EpisodeCard(props) {
    return(
        <div key={props.id}>
        <h1>{props.episode.name}</h1>
        <h2>{props.episode.date_creation}</h2>
        <h3>{props.episode.first_date}</h3>
        </div>
    );
}