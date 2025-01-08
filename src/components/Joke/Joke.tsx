import { use } from 'react';
import './Joke.css';


const Joke = ({ jokePromise }: { jokePromise: Promise<{ value: string }> }) => {

  const jokes = use(jokePromise);

return (<div className="joke">{jokes?.value}</div>);
}

export default Joke;
