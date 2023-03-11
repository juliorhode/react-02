// esto es porque tengo el index con las importaciones de los hooks (dentro de la carpeta hokks)
import {useCounter,useFetch} from '../hooks'
// import { useCounter } from "../hooks/useCounter";
// import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHook = () => {
  const { counter, incrementar, decrementar } = useCounter(1);
  // console.log(counter);

  const { data, isLoading, errores } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  // console.log({ data, isLoading, errores });

  //   esto es si viniese en arreglo, pero como usamos otra API ya que estaba caida, pues es un objeto como viene
  // null no se puede desestructura
  // !undefine = true  pero !!undefine = false
  // entonces... si !!data es true ejecuta data[0]
  //   const {image,status} = !!data&&data[0]

  return (
    <>
      <h1>Rick and Morty</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading ....</div>
      ) : (
        <blockquote className="blockquote text-end">
          <img src={data.image} className="img-fluid" alt="..."></img>
          <p className="mb-1">{data.location.name}</p>
          <p className="mb-1">{data.status}</p>
          <footer className="blockquote-footer">{data.name}</footer>

          <button hidden={isLoading}
            //   esto lo realice para que cuando llegue al principio, el boton no hiciera nada
            onClick={() => counter > 1 && decrementar()}
            className="btn btn-primary"
          >
            Back
          </button>

          {/* se coloca () => incrementar() porque no estoy enviando el evento click, porque si fuere el caso que enviara el evento, fuera asi incrementar() */}
          <button hidden={isLoading} onClick={() => incrementar()} className="btn btn-primary">
            Next
          </button>
        </blockquote>
      )}
      {/* <button disabled={isLoading} onClick={() => incrementar()} className="btn btn-primary">Next</button> */}
    </>
  );
};


// token github: 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