import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import cardData from './cardData';

function App() {
  const CardElements = cardData.map((card) => (
    <div className="col-4">
      <Card 
        key={card.id}
        {...card} // shorthand if the props name has the same name as the card properties
        // image={card.image}
        // btn = {card.btn}
        // rating = {card.rating}
        // reviewer = {card.reviewer}
        // country = {card.country}
        // description = {card.description}
        // price = {card.price}
      />
    </div>
  ));
  return (
    <div>
      <Navbar />
      <div className="container">
        <Hero />
        <div className="row">
          {CardElements }
        </div>
      </div>
    </div>
  )
}

export default App
