  import React, {useState} from 'react';
  import vanImage from './images/image-53.png';
  import './Vans.css';

  

  const vanData = [
    { name: "Modest Explorer", price: 60, type: "Simple", image: "modest-explorer.jpg" },
    { name: "Beach Bum", price: 80, type: "Rugged", image: "beach-bum.jpg" },
    { name: "Reliable Red", price: 100, type: "Luxury", image: "reliable-red.jpg" },
    { name: "Dreamfinder", price: 65, type: "Simple", image: "dreamfinder.jpg" },
    { name: "The Cruiser", price: 120, type: "Luxury", image: "the-cruiser.jpg" },
    { name: "Green Wonder", price: 70, type: "Rugged", image: "green-wonder.jpg" },
  ];


  const Vans = () => {
    const [filter, setFilter] = useState("");
  

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const clearFilters = () => {
    setFilter("");
  };

  const filteredVans = vanData.filter(van => filter === "" || van.type === filter);

  return (
    <div className="van-options">
      <h1>Explore our van options</h1>
      {/* <div className="filters">
        <button onClick={() => handleFilterChange("Simple")} className={filter === "Simple" ? "active" : ""}>Simple</button>
        <button onClick={() => handleFilterChange("Luxury")} className={filter === "Luxury" ? "active" : ""}>Luxury</button>
        <button onClick={() => handleFilterChange("Rugged")} className={filter === "Rugged" ? "active" : ""}>Rugged</button>
        <button onClick={clearFilters}>Clear filters</button>
      </div> */}
      <div className="van-list">
        {filteredVans.map(van => (
          <div className="van-card" key={van.name}>
            <img src={vanImage} alt={van.name} />
            <h2>{van.name}</h2>
            <p>${van.price}/day</p>
            <span className={`tag ${van.type.toLowerCase()}`}>{van.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

  
  export default Vans;