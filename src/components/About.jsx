import { motion }
from "framer-motion";

export default function About() {

  return (

    <section

    id="about"

    className="
    py-32
    px-8
    max-w-7xl
    mx-auto">

      <motion.div

      initial={{
      opacity:0,
      y:50
      }}

      whileInView={{
      opacity:1,
      y:0
      }}

      transition={{
      duration:0.8
      }}

      className="
      glass
      rounded-3xl
      p-10">

        <h2
        className="
        text-5xl
        font-bold
        gold-text
        mb-8">

        About Me

        </h2>

        <p
        className="
        text-lg
        text-gray-300
        leading-9">

        I'm Sohail Khan, a passionate
        Data Analyst and Graphic Designer
        currently pursuing B.Tech in
        Computer Science and Engineering
        at ARKA JAIN University.

        I enjoy transforming data into
        meaningful insights and designing
        visually engaging digital experiences.

        My interests include Data Analytics,
        Machine Learning, Web Development,
        Cloud Computing and Graphic Design.

        </p>

      </motion.div>

    </section>

  );
}