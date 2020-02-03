import React from "react";
import styled from "styled-components";

// export default function LocationCard({ name, type, dimension, residents }) {
//   return <span>todo: location</span>;
// }
const StyledLocationDescription=styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 15px auto;
  box-shadow: 0px 0px 10px 2px #12c2e9;
`;

const H1 = styled.h1`
  padding: 15px 0 0;
`;

const Card = styled.div`
  height: 200px;
  /* width: 180px; */
  background: #a17fe0;
  text-align: center;
`;

export default function LocationCard(props) {
  return (
    <Card>
      <div key={props.locationCard.id}>
      <H1>{props.locationCard.name}</H1>
      <img src={props.locationCard.image} alt="Rick and Morty Locations"/>
      <StyledLocationDescription>
      <div>Type:{props.locationCard.type}</div>
      <div>Dimension:{props.locationCard.dimensions}</div>
      </StyledLocationDescription>
    </div>
    </Card>
    
  );
}
