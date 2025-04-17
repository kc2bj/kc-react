export default function Footer() {
    return (
      <footer className="w-full bg-gray-50 text-gray-600 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Kris Celeste. All rights reserved.
        </div>
      </footer>
    );
  }