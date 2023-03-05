import { useCounter } from "../hooks/useCounter"

export const CounterCustomHook = () => {

    // si el retorno del hook es un objeto la desestructuracion es con {}, pero si es un arreglo seria con []
    const {counter,incrementar,decrementar,reset} = useCounter();

    
  return (
    <>
    <h1>Counter con hook: {counter}</h1>
    <hr />
    {/* 
    State : "10[object Object]" 
    es la representacion toString de un objeto

    es como hacer esto:
    const obj = {}
    console.log( obj.toString() )

    esto sucede es porque estamos mandando el evento del click como primer argumento a la funcion incrementar. Antes funcionaba porque en no recibia ningun argumento, pero luego se cambio a valor = 1

    esto es porque onClick={incrementar} lo toma de esta manera:
    onClick={ (evento) => incrementar(evento)}

    como no queremos el evento click en este caso pero si me interesa es mandar el valor 
    */}
    {/* <button className="btn btn-primary" onClick={incrementar}>+1</button> */}
    <button className="btn btn-primary" onClick={ () => incrementar(2)}>+1</button>

    {/* <button className="btn btn-primary" onClick={reset}>Reset</button> */}
    <button className="btn btn-primary" onClick={reset}>Reset</button>

    <button className="btn btn-primary" onClick={ () => decrementar(2)}>-1</button>
    </>
  )
}
