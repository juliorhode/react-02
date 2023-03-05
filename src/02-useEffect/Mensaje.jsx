import { useEffect, useState } from "react";

export const Mensaje = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // Si el listener no se desmonta, se van a crear tantas veces se dispare el useEffect cmbiando el username... ver consola
    //   window.addEventListener('mousemove',(event)=>{
    //     // console.log(":)");
    //     console.log(event.x, event.y);
    //   });

    // creamos una referencia para evitar lo anterior. SIEMPRE DEBE SER POR REFERENCIA PORQUE SINO EL ESPACION EN MEMORIA VA A SER DIFERENTA...... NOTA: no lo creamos fuerda del useEffect porque esto esta intrinsicamente vinculado con el listenner
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);

      //   forma 1
      //   setCoords(coords)
      // forma 2
      setCoords({ x, y });
    //   si el listener no se desmontara y se mueva el mouse, vamos a actualizar el estado setCoords de un componente que ya no esta montado (no existe) y esto genera un error (antes de react 18 y ahora no aparece)
    };
    // cuando el componente se monta, se crea el listener apuntano a la funcion onMouseMove
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      // para remover el listener
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usaurio ya existe</h3>
      {
        // JSON.stringify para poder graficar el objeto
        JSON.stringify(coords)
      }
    </>
  );
};
