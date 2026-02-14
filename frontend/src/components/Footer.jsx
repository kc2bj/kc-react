export default function Footer(props) {
  return (
    <footer className={"w-full py-6 px-4 text-center text-sm bg-espresso-leaf text-white transition-colors duration-300 " + (props.className || "") }>
      <span>&copy; {new Date().getFullYear()} Kris Celeste</span>
      <span className="mx-2">·</span>
      <a href="https://theiamgroup.org" target="_blank" rel="noopener noreferrer" className="text-white underline hover:no-underline">Founder, iAM Studios</a>
    </footer>
  );
}
