import { useState } from "react";

export const CounterApp = () => {
  /*
    nosotros en useState no siempre vamos a tener un valor primitivo, arreglo u objeto... puede ser lo que necesitemos como una instancia a una clase, o lo que necesitemos.
    */
  //   const [counter, setCounter] = useState({
  //     counter1: 10,
  //     counter2: 20,
  //     counter3: 30,
  //   });

  //   podemos realizar desestructuracion para que sea mas comodo

  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;
  /*
esta pasando que al cargar la pagina el state del componente esta asi: 
State: {counter1: 10, counter2: 20, counter3: 30}

Al darle click al boton los valores de los h1 desaparecen el ahora el state esta asi:

State: 11

Lo que esta sucediendo aqui es que JS puede mutar las cosas... iniciamos con un objeto que tiene propiedades, paso a un valor primitivo numerico

*/
  //   return (
  //     <>
  //       <h1>Counter: {counter1}</h1>
  //       <h1>Counter: {counter2}</h1>
  //       <h1>Counter: {counter3}</h1>
  //       <hr />
  //       <button className="btn" onClick={() => setCounter(counter1 + 1)}>+1</button>
  //     </>
  //   );

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <hr />
{/* cuando se tiene un objeto en el useState, se deben preservar los valores anterirores si solo se quiere cambiar una nueva propiedad dado que cuando se llama el setCounter le dice que ese objeto va a ser el nuevo valor del state y cuando se redibujo, la informacion se extre de ahi. 


*/}
      <button className="btn" onClick={() => setCounter({
        // esto se debe colocar al inicio porque debajo de counter1: counter1+1 no hace nada
        ...counter,
        counter1: counter1+1,
        // cuando la variable tiene el mismo nombre que el valor, se puede reducir con solo dejar la referencia
        // counter2: counter2,
        // counter3: counter3,
        
        // counter2,counter3

        // si son muchas propiedades y no tener que escribirlas todas, podemos usar el operador spread
        // ...counter


      })}>
        +1
      </button>
    </>
  );
};
