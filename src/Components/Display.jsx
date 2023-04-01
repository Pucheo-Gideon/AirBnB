
import React from "react";
import JokesData from "../Components/JokesData";
import Jokes from "../Components/Jokes";
import '../App.css'
export default function Display (){

    const Episodes = JokesData.map(episode => {
        return <Jokes title={episode.title} image={episode.image} name={episode.name} />
    })
    return(
        <div className="container ">
            {Episodes}
        </div>
    )
}