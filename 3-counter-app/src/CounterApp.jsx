import { useState } from "react";

export const CounterApp = ({value})=>{

    // let incremental= 0;
    
    const [incremental, setIncremental] = useState(value);

    const contador = () =>{
        // setIncremental(incremental+1);
        // setIncremental(c => c+1);
        setIncremental(incremental => incremental+1);
        }

    return <>
        <h2>El valor del contador és: {incremental}</h2>
        <button onClick= { contador } >Incrmentar +1</button>
    </>;
}