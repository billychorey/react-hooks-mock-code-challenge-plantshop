import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);


  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((plants) => {
        setPlantList(plants);
        setFilteredPlants(plants);

      });
  }, []);

  function onAddPlant(newPlant) {
    setPlantList((prevPlantList) => [...prevPlantList, newPlant]);
  }
  function onFilter(filterText) {
    const filteredPlants = plantList.filter((plant) =>
      plant.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredPlants(filteredPlants);
  }

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search onFilter={onFilter}/>
      <PlantList plantList={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
