import React, {useState} from 'react'

export function AdDesigner(){
    const [flavor, setFlavor] = useState<string>("Strawberry");

    return (
        <div className= "AdDesigner">
            <h1>Ad Designer</h1>
            <div className="adBox">
                <p>Vote For:</p>
                <p>{flavor}</p>
            </div>
        <div className= 'flavorButton'>
        <p>What to support</p>
            <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
            <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
            <button onClick={() => setFlavor("Starwberry")}>Strawberry</button>
         </div>
         <div>
            <p>Color Theme</p>
            <button>Light</button>
            <button>Dark</button>
        </div>
        <div>
            <p>Font Size</p>
            <button>Down</button>
            <button>Up</button>
        </div>
        </div>
    )
}

export default AdDesigner;