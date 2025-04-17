export default function Header() {
    return (
      <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">Kris Celeste</div>
          <nav className="space-x-8 text-sm font-medium">
            <a href="/" className="hover:text-accent transition">Home</a>
            <a href="/work" className="hover:text-accent transition">Work</a>
          </nav>
        </div>
      </header>
    );
  }