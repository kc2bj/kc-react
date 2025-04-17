import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="w-64 bg-primary text-white p-6 space-y-4">
      <h1 className="text-xl font-bold tracking-tight">Kris Celeste</h1>
      <ul className="space-y-3">
        <li><NavLink to="/" className="block hover:text-accent">Home</NavLink></li>
        <li><NavLink to="/work" className="block hover:text-accent">Work</NavLink></li>
        <li><NavLink to="/about" className="block hover:text-accent">About</NavLink></li>
      </ul>
    </nav>
  );
}
