import react from 'react';

export default function Card(props) {
  return (
    <div className="position-absolute">
      <img src={props.image} className="rounded-4 position-relative" alt="" />
      { props.btn && <button className="btn btn-light position-absolute ms-3 mt-1 start-0">Sold Out</button> }
      <div className="card-body">
        <img src="star.svg" className="pe-1" alt="" />
        <span className="card-text pe-1"> {props.rating} </span> 
        <span className="card-text text-grey pe-1">({props.reviewer}) •</span>
        <span className="card-text text-grey pe-1">{props.country}</span>
      </div>
        <span className="card-text">{props.description}</span><br/>
        <span className="card-text"> <span className="fw-semibold">From ${props.price} / </span>person</span>
    </div>
  )
}