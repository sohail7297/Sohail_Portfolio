import { TypeAnimation }
from "react-type-animation";

import { motion }
from "framer-motion";

import profile
from "../assets/profile.png";

export default function Hero(){

  return(

    <section
    className="
    min-h-screen
    flex
    flex-col
    justify-center
    items-center
    text-center
    px-6">

      <motion.img

      src={profile}

      className="
      w-56
      h-56
      rounded-full
      hero-image
      object-cover"

      initial={{
      scale:0
      }}

      animate={{
      scale:1
      }}

      transition={{
      duration:1
      }}

      />

      <h1
      className="
      text-6xl
      font-bold
      mt-8">

      Sohail Khan

      </h1>

      <TypeAnimation

      sequence={[

      "Data Analyst",
      2000,

      "Graphic Designer",
      2000,

      "Web Developer",
      2000

      ]}

      repeat={Infinity}

      className="
      text-3xl
      gold-text
      mt-4"

      />

      <p
      className="
      max-w-2xl
      mt-6
      text-gray-300">

      Passionate Data Analyst,
      Graphic Designer and
      Computer Science student
      at ARKA JAIN University.

      </p>

      <div
      className="
      flex gap-4 mt-8">

        <a

        href="/resume.pdf"

        className="
        px-6 py-3
        rounded-full
        gradient-gold
        text-black
        font-bold">

        Download Resume

        </a>

        <a

        href="#projects"

        className="
        border px-6 py-3
        rounded-full">

        View Projects

        </a>

      </div>

    </section>

  );
}