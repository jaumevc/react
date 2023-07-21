export const CounterApp = ()=>{

    let incremental= 0;
    const counter = () =>{
        incremental = incremental+1;
        console.log(incremental);
        }

    return <>
        <h2>El valor del contador és: {incremental}</h2>
        <button onClick= {()=>{
            counter();
        }} >Incrmentar +1</button>
    </>;
}