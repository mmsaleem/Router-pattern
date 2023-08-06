import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';






  const dogs = [
    {
      name: "Whiskey",
      age: 5,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ];




const DogRoute = () => {
  const { name } = useParams();
  const currentDog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());

  if (!currentDog) {
    return <h1>Doggo not found. Is Doggo missing? Doggo sad. </h1>;
  }

  return <DogDetails dog={currentDog} />;
};


const App = () => {
  return (
    <Router>
      <div className = "App">
    <Routes>
    <Route path="/dogs" element={<DogList dogs={dogs}/>}/>
    <Route path ="/dogs/:name" element={<DogRoute/>}/>
    <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;





