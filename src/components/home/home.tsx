import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h2>Welcome</h2>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
