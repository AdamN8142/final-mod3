import React from 'react'


export const Card = (props ) => {
  return (
    <div>
      <h1>{props.pres.president}</h1>
      <p>President Number: {props.pres.number}</p>
      <p>Birthday: {props.pres.birth_year}</p>
      <p>Death: {props.pres.death_year}</p>
      <p>Took Office on:{props.pres.took_office}</p>
      <p>Left Office on: {props.pres.left_office}</p>
      <p>Political Party: {props.pres.party}</p>
    </div>
  )

}

export default Card;