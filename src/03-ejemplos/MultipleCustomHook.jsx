import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHook = () => {
  const { counter, incrementar, decrementar } = useCounter(1);
  // console.log(counter);

  const { data, isLoading, errores } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  console.log({ data, isLoading, errores });

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

          <button
            onClick={() => counter > 1 && decrementar()}
            className="btn btn-primary"
          >
            Back
          </button>

          {/* se coloca () => incrementar(1) porque no estoy enviando el evento click, porque si fuere el caso que enviara el evento, fuera asi incrementar(1) */}
          <button onClick={() => incrementar()} className="btn btn-primary">
            Next
          </button>
        </blockquote>
      )}
      {/* <button disabled={isLoading} onClick={() => incrementar()} className="btn btn-primary">Next</button> */}
    </>
  );
};


// token github: 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