import React from "react";

function PlantCard({plant}) {
 
  function handleStockClick(e) {
    const textToChange = e.target.textContent.toLowerCase();
    if (textToChange === "out of stock") {
      e.target.textContent = "In Stock";
    } else {
      e.target.textContent = "Out of Stock";
    }
  }


  return (
    <li className="card" id={plant.id}>
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.inStock ? (
        <button className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
 