import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

  return (

    <nav
      className="fixed top-0 w-full z-50 glass
      px-10 py-5 flex justify-between"
    >

      <h2
      className="gold-text text-2xl font-bold">
      SOHAIL KHAN
      </h2>

      <div
      className="flex gap-6 items-center">

        <a href="#about">About</a>

        <a href="#education">Education</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>

        <a href="#experience">Experience</a>

        <a href="#contact">Contact</a>

        <ThemeToggle />

      </div>

    </nav>

  );
}