import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-espresso-bg dark:text-espresso-text transition-colors duration-300">
      <Navigation className="dark:bg-espresso-surfacedark:border-espresso-border rounded"/>
      <Header className="dark:bg-espresso-surfacedark:border-espresso-border rounded"/>
      <main className="flex-1 px-6 max-w-4xl mx-auto py-4 mt-8 dark:bg-espresso-surfacedark:border-espresso-border rounded">
        <Outlet />
      </main>
      <Footer className="dark:bg-espresso-surfacedark:border-espresso-border rounded"/>
    </div>
  );
}
