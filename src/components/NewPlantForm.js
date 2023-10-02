import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const initialState = {
    name: "",
    image: "",
    price: "",
  };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((previousFormState) => ({
      ...previousFormState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((plant) => onAddPlant(plant));
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formState.name}
          placeholder={formState.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          value={formState.image}
          placeholder={formState.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={formState.price}
          step="0.01"
          placeholder={formState.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;