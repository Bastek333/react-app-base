import { Link } from 'react-router';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/vite">Vite</Link>
      <Link to="/react">React</Link>
      <Link to="/jokes">Jokes</Link>
      <Link to="/react-query">React Query</Link>
      <Link to="/dummy-data-direct">Dummy Data Direct</Link>
    </nav>
  );
};

export default Navigation;
