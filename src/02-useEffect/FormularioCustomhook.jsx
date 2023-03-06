import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormularioCustomhook = () => {
  // // importacion del useState
  // const [formState, setFormState] = useState({
  //   username: "",
  //   email: "",
  //   password:""

  // });

  // // desestructuracion de campos
  // const { username, email, password } = formState;

  // // crear el onInputChange
  // const onInputChange = ({ target }) => {
  //   const { name, value } = target;
  //   // console.log({name,value});
  //   setFormState({
  //     // hacemos spread para mantener lo que no vamos a cambiar
  //     ...formState,
  //     // propiedad computada de los objetos
  //     [name]: value,
  //   });
  // };

  // si en algun momento nos dicen que tenemos que realizar un nuevo formulario y otro y otro, vamos a tener que repitir mucho codigo una y otra vez, es decir, tenemos que importar el useState, desestructuracion de campos, crear el onInputChange, etc etc etc. Para ello podemos crear un custom hook que reciba el estado del formulario y que nos de todo lo que necesitamos para poder trabajar de una manera mas rapida... Ver el custom hook llamado useForm

  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // ya no lo necesitamos porque mandamos los datos desestructurados desde el useForm
  // const {username,email,password} = formState;

  return (
    <>
      <h1>Formulario Custom hook</h1>
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
      <input
        type="password"
        className="form-control mt-3"
        name="password"
        placeholder="password"
        value={password}
        onChange={onInputChange}
      />
      {/* 
      TAREA 
      el boton debe invocar al hacer click, la funcion onResetForm el cual va a establecer todos los valores al estado inicial del formulario... es decir, al punto inicial al cargar el formulario. NOTA: no debe ser aqui la funcionalidad, debe ser en useForm
      */}
      <button onClick={onResetForm} className="btn btn-primary mt-3">Borrar</button>
    </>
  );
};
