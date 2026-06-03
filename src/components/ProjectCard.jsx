import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({
project
}) {

return(

<motion.div

whileHover={{
scale:1.03,
y:-10
}}

className="
project-card
glass
rounded-3xl
overflow-hidden">

<img

src={project.image}

alt={project.title}

className="
w-full
h-56
object-cover"

/>

<div className="p-6">

<h3
className="
text-2xl
font-bold
mb-3">

{project.title}

</h3>

<p
className="
text-gray-300
mb-4">

{project.description}

</p>

<div
className="
flex
flex-wrap
gap-2
mb-5">

{
project.tech.map((item,index)=>(

<span

key={index}

className="
px-3
py-1
rounded-full
bg-yellow-600
text-black
text-sm">

{item}

</span>

))
}

</div>

<div
className="
flex
gap-4">

<a

href={project.github}

target="_blank"

className="
flex
items-center
gap-2
px-4
py-2
rounded-full
gradient-gold
text-black
font-bold">

<FaGithub/>

GitHub

</a>

<a

href={project.demo}

target="_blank"

className="
flex
items-center
gap-2
border
px-4
py-2
rounded-full">

<FiExternalLink/>

Demo

</a>

</div>

</div>

</motion.div>

)

}