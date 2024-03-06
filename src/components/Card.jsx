import React from "react"
import Star from "/assets/Star.png"

export default function Card(props) {
    let badgeText
    if (props.openspots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            <div className="card-img-container">
                <img 
                    src={`/assets/${props.coverImg}`} 
                    className="card-img"
                    alt="Image of katie"
                />
                {badgeText && <p>{badgeText}</p>}
            </div>
            <div className="card-info">
                <img 
                    src={Star} 
                    className="card-star" 
                    alt="star icon"
                />
                <span className="card-review-avg">&nbsp;{props.stats.rating}</span>                
                <span className="card-review-count gray">({props.stats.reviewCount})&nbsp;•</span>
                <span className="card-country gray">&nbsp;{props.location}</span>                
            </div>
            <h2 className="card-title">
                {props.title}
            </h2>
            <p className="card-price">
                <strong>From ${props.price}</strong> / person
            </p>
        </div>
    )
}