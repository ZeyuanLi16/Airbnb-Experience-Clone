import React from "react"
import Navbar from "./components/NavBar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import Cards from "./data.js"

export default function App() {
    return (
      <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
          {Cards.map(c => 
            <Card 
              key={c.id}
              img={c.coverImg}
              rating={c.stats.rating}
              reviewCount={c.stats.reviewCount}
              location={c.location}
              title={c.title}
              price={c.price}
              openspots={c.openSpots}
            />
          )}
        </section>
      </div>
    )
}