import { Suspense, useState } from 'react';
import Joke from '../../components/Joke/Joke';
import Spinner from '../../components/Spinner/Spinner';
import getJokes from '../../api/getJokes';

const Jokes = () => {
  const [apiCallPromise, setApiCallPromise] = useState(() => getJokes());

  const onRefreshClick = () => {
    setApiCallPromise(getJokes());
  };

  return (
    <Suspense fallback={<Spinner />}>
      <h2>Joke</h2>
      <Joke jokePromise={apiCallPromise} />
      <button onClick={onRefreshClick}>Refresh</button>
    </Suspense>
  );
};

export default Jokes;
