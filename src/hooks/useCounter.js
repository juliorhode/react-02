import { useState } from "react";
// por si no envian el valor inicial, lo inicializamos en 10
export const useCounter = (valorInicial = 10) =>{

    const [counter, setCounter] = useState(valorInicial)
    // si queremosmodificar el valor de counter podemos usar el setCounter pero para hacerlo debemos exponerlo con una funcion

    // forma 1:
    const incrementar = (valor = 1)=>{
        console.log(valor);
        setCounter(counter+valor);

    }
    const decrementar = (valor = 1)=>{
        if (counter ===0) return
        setCounter(counter-valor);
    }
    const reset = ()=>{
        setCounter(valorInicial);
    }

    return{
        counter,
        incrementar,
        decrementar,
        reset,
    }
}