import React, {useState} from 'react'

export function Votes(){
    let [chocolateVotes, setChocolateVotes] = useState(0);
    let [vanillaVotes, setVanillaVotes] = useState(0);
    let [strawberryVotes, setStrawberryVotes] = useState(0);
    let totalVotes = chocolateVotes + vanillaVotes + strawberryVotes

    return (
        <div className= "Votes">
            <h1>Votes</h1>
            <div className="voteSelection">
            <button onClick= {() =>{setChocolateVotes(chocolateVotes++)}}>Chocolate</button>
            <button onClick={() => {setVanillaVotes(vanillaVotes++)}}>Vanilla</button>
            <button onClick={() => {setStrawberryVotes(strawberryVotes++)}}>Strawberry</button>
   </div>
        <p>Chocolate: [{chocolateVotes}]{chocolateVotes/totalVotes * 100}</p>
        <p>Vanilla: [{vanillaVotes}]{vanillaVotes/totalVotes * 100}</p>
        <p>Strawberry: [{strawberryVotes}]{strawberryVotes/totalVotes * 100}</p>
        </div>
    )
}

export default Votes;

        
            //  <p>Chocolate Votes{flavor}</p>
            //     <div className='chocoVotes'></div>
            //  <p>Vanilla Votes{flavor}</p>
            //     <div className='vanVotes'></div>
            //  <p>Strawberry Votes{flavor}</p>
            //     <div className='strawVotes'></div>