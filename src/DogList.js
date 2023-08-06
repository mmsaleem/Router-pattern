import React from "react"
import { NavLink } from "react-router-dom"

const DogList = ({dogs}) => {
    return (
        <div className="DogList">

        {dogs.map((dog) => {
           return (
            <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
            {dog.name}
            </NavLink>
           )



        })}
         </div>
    )
}

export default DogList