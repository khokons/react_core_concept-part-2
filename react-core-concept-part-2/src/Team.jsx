import { useState } from "react"

export default function Team(){

    const [team, setPlayer] =useState(11);

    const teamStyle ={
        margin: '15px',
        padding: '15px',
        border: '2px solid red',
        borderRadius: '15px'
    }

    const handleAdd = () =>{
        const newTeam = team + 1;
        setPlayer(newTeam);
    }

    const handleRemove = () =>{
        const newTeam = team - 1;
        setPlayer(newTeam);
    }

    return(
        <div style={teamStyle}>
            <h2>Players : {team}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}


