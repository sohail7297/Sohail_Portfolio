import { motion } from "framer-motion";
import { experiences } from "../data/experience";

export default function Experience() {

return(

<section
id="experience"
className="py-24 px-8 max-w-6xl mx-auto">

<h2
className="text-5xl font-bold text-center gold-text mb-16">

Experience

</h2>

<div className="relative border-l-4 border-yellow-500">

{
experiences.map((exp,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.8,
delay:index*0.2
}}

className="mb-16 ml-10">

<div
className="
absolute
w-5
h-5
bg-yellow-500
rounded-full
-ml-[52px]
mt-2"/>

<div className="glass p-8 rounded-3xl">

<h3 className="text-2xl font-bold">
{exp.title}
</h3>

<h4 className="gold-text text-lg">
{exp.company}
</h4>

<p className="text-gray-400 mb-4">
{exp.period}
</p>

<p className="text-gray-300">
{exp.description}
</p>

</div>

</motion.div>

))
}

</div>

</section>

)

}