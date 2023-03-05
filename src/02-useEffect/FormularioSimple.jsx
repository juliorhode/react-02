import { useEffect, useState } from "react";
import { Mensaje } from "./Mensaje";

export const FormularioSimple = () => {
  const [formState, setFormState] = useState({
    username: "Julio",
    email: "julio@gmail.com",
  });

  const { username, email } = formState;

  // const onInputChange = (event)=>{
  //   console.log(event.target.value);
  //   console.log(event.target.name);
  // }
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // console.log({name,value});
    setFormState({
      // hacemos spread para mantener lo que no vamos a cambiar
      ...formState,
      // propiedad computada de los objetos
      [name]: value,
    });
  };

  // useEffect es usado para efectos secundarios. Cada vez que yo cambie el estado, useEffect se dispara. Si este no tiene ninguna dependencia, cada vez que se redibuje el formulario (cunado cambie algun valor), useEffect se dispara.

  // No se recomienda colocar un useEffect sin ninguna dependencia, esa dependencia es el segundo valor que se le envia dentro de []. El primer argumento es el callback (funcion que se va a ejecutar cada vez que useEffect se dispare). La dependencia son las condiciones para que el useEffect se dispare. Si la dependencia es un arreglo vacio, solo se va a disparar una sola vez cuando el componente se llama (se carga). Pero si queremos que el useEffect se dispare cuando el formulario cambie (solo el formulario)      . Los useEffect se deben crear para cada accion personalizada o especializado, o sea, por cada efecto secundario que querramos llamar
  
  useEffect(() => {
    console.log('useEffect llamado');
  },[] );

  // se activa por cada cambio que surja en el formulario (este se dispara la primera vez que se monta el componente dado que pasa de no tener nada a tener algo)
  useEffect(() => {

    // console.log('formState cambio');
  },[formState] );

  useEffect(() => {
    // console.log('email cambio');
  },[username] );

  useEffect(() => {
    // console.log('email cambio');
  },[email] );


  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        name="username"
        placeholder="usuario"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-3"
        name="email"
        placeholder="usuario@gmail.com"
        value={email}
        onChange={onInputChange}
      />

      {
        (username=='Julio')&& <Mensaje/>
      }

      

    </>
  );
};
