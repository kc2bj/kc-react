export default function Footer(props) {
  return (
    <footer className={"w-full py-6 px-4 text-center text-sm bg-espresso-leaf text-white transition-colors duration-300 " + (props.className || "") }>
      <span>&copy; {new Date().getFullYear()} Kris Celeste. All rights reserved.</span>
    </footer>
  );
}
