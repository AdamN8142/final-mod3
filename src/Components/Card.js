import React from 'react'


export const Card = (props ) => {
  return (
    <div>
      <h1>{props.pres.president}</h1>
      <p>{props.pres.number}</p>
      <p>{props.pres.birth_year}</p>
      <p>{props.pres.death_year}</p>
      <p>{props.pres.took_office}</p>
      <p>{props.pres.left_office}</p>
      <p>{props.pres.party}</p>
    </div>
  )

}

export default Card;