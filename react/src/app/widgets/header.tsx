import { NavLink } from 'react-router';
import './header.css';


export default function Header() {
  return (
    <>
      <header className="header inner">
        <div className="logo-container">
          <div className="logo">React Playground.</div>
          <div className="logo-title">for Shatalov Dmytro and Friends.</div>
        </div>
        <nav>
          <ul className="header__menu">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/tanstack">TanStack</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
