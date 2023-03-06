import {useState} from 'react'

export const useForm = (valoresForm = {}) => {
  // importacion del useState
  const [formState, setFormState] = useState(valoresForm);

  // crear el onInputChange
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

  const onResetForm = ()=>{
    setFormState(valoresForm)
  }



  // es mejor trabajar con objetos en los return a menos que estrictamente se sepa que no se va a expandir este hook en futuro
  return {
    // asi enviamos desestructurado el username,email,password
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
