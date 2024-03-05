import React from "react"
import Katie from "../assets/katie.png"
import Star from "../assets/Star.png"

export default function Card() {
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
                <span className="card-review-avg">&nbsp;5.0</span>                
                <span className="card-review-count gray">(6)&nbsp;•</span>
                <span className="card-country gray">&nbsp;USA</span>                
            </div>
            <h2 className="card-title">
                Life lessons with Katie Zaferes
            </h2>
            <p className="card-price">
                <strong>From $136</strong> / person
            </p>
        </div>
    )
}