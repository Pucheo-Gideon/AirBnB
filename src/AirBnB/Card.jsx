import React from "react";
import '../App.css'




export default function Card(props) {
  
  console.log(props.card)
    let badgeText 
  if(props.card.openSpots ===0){
    badgeText = "SOLD OUT"
  } else if(props.card.location == "Online"){
    badgeText = "ONLINE"
  }
  return (
    <div className="card">
     {badgeText && <div className="card-badge">{badgeText}</div>}
      {/* {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>} */}
      <img src={props.card.coverImg} className="card--image" />
      <div className="card--stats">
        <img src={props.card.starImg} className="card--star" />
        <span>{props.card.stats.rating}</span>
        <span className="gray">{props.card.stats.reviewCount} • </span>
        <span className="gray">{props.card.location}</span>
      </div>
      <p>{props.card.title}</p>
      <p className="card--title">
        <span className="bold">From ${props.card.price}</span> / person
      </p>
    </div>
  );
}

/** */