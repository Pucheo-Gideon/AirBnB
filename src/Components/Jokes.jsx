
import React from "react";

const Jokes = (props) => {

    // let {question, answer} = props
    console.log(props)
    return(
        <div key={props.title}>
            <h1>{props.title}</h1>
            <img src={props.image}/>
            <p>{props.name}</p>
            <hr/>
        </div>
    )
}

export default Jokes;