import React from "react"
import Katie from "/public/assets/katie.png"
import Star from "/public/assets/Star.png"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-img-container">
                <img 
                    src={Katie} 
                    className="card-img"
                    alt="Image of katie"
                />
                <p>Sold Out</p>
            </div>
            <div className="card-info">
                <img 
                    src={Star} 
                    className="card-star" 
                    alt="star icon"
                />
                <span className="card-review-avg">&nbsp;{props.rating}</span>                
                <span className="card-review-count gray">({props.reviewCount})&nbsp;•</span>
                <span className="card-country gray">&nbsp;{props.country}</span>                
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