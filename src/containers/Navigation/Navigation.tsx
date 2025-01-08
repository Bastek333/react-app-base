import { Link } from 'react-router';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/vite">Vite</Link>
      <Link to="/react">React</Link>
      <Link to="/jockes">Jokes</Link>
    </nav>
  );
};

export default Navigation;
