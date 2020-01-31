import React from "react";

// export default function LocationCard({ name, type, dimension, residents }) {
//   return <span>todo: location</span>;
// }

export default function LocationCard(props) {
  return (
    <div key={props.id}>
      <h1>{props.location.name}</h1>
      <h2>Type:{props.location.type}</h2>
      <h2>Dimension:{props.location.dimensions}</h2>
      <img src={props.location.image} alt="Rick and Morty Locations"/>
    </div>
  );
}