import { Outlet } from 'react-router-dom';
import Menu from './Menu';

export default function Layout() {
  return (
    <div className="flex min-h-screen text-primary bg-softWhite">
      <Menu />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
