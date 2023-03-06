import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [estado, setStado] = useState({
    data: null,
    isLoading: true,
    errores: null,
  });

  const getFetch = async () => {
    setStado({
      ...estado,
      isLoading: true,
    });
    // invocamos el fetch con el url
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    // console.log(data);

    setStado({
      data,
      isLoading: false,
      errores: null,
    });
  };

  // no se usa await aqui porque useEffect espera una funcion pura
  useEffect(() => {
    getFetch();
  }, [url]);


//   se ve redundante pero es mas visible para determinar la funcionalidad y si en un futuro se expande se puede exponer lo que se quiera facilmente... es como una mejor lectura
  return {
    data:       estado.data,
    isLoading:  estado.isLoading,
    errores:    estado.errores,
  };
};
