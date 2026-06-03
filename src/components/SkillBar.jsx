import { motion } from "framer-motion";

export default function SkillBar({
  skill,
  level
}) {

  return (

    <div className="mb-6">

      <div
      className="flex justify-between mb-2">

        <span>{skill}</span>

        <span>{level}%</span>

      </div>

      <div
      className="
      h-3
      bg-gray-800
      rounded-full">

        <motion.div

          initial={{
          width:0
          }}

          whileInView={{
          width:`${level}%`
          }}

          transition={{
          duration:1.5
          }}

          className="
          h-3
          rounded-full
          gradient-gold"

        />

      </div>

    </div>

  );
}