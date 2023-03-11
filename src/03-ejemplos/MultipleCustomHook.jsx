import { useCounter, useFetch } from '../hooks'
import { LoadingQuote, Qoute } from './';

export const MultipleCustomHook = () => {
  const { counter, incrementar, decrementar } = useCounter(1);
  const { data, isLoading, errores } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  return (
    <>
      <h1>Rick and Morty</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Qoute data={data} />}

      <button hidden={isLoading}
        onClick={() => counter > 1 && decrementar()}
        className="btn btn-primary"
      >
        Back
      </button>

      <button hidden={isLoading} onClick={() => incrementar()} className="btn btn-primary">
        Next
      </button>


    </>
  );
};


// token github: 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