import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 text-center md:text-left">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">Kris Celeste</h1>
      <p className="text-xl text-gray-700 mb-10 max-w-2xl">Frontend Developer & UX/UI Designer crafting elegant experiences using Drupal, React, and modern design systems.</p>
      <nav className="flex justify-center md:justify-start gap-6 text-base font-medium">
        <Link to="/" className="hover:text-accent transition">Home</Link>
        <Link to="/work" className="hover:text-accent transition">Work</Link>
      </nav>
    </section>
  );
}