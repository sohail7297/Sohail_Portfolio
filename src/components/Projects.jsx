import { useState } from "react";

import ProjectCard
from "./ProjectCard";

import {
projects
}
from "../data/projects";

export default function Projects(){

const [filter,setFilter]
=
useState("All");

const filteredProjects=

filter==="All"

?

projects

:

projects.filter(

project=>

project.category===filter

);

return(

<section

id="projects"

className="
py-24
px-8
max-w-7xl
mx-auto">

<h2

className="
text-center
text-5xl
font-bold
gold-text
mb-10">

Projects

</h2>

<div

className="
flex
justify-center
gap-4
mb-12
flex-wrap">

{
[
"All",
"Web",
"AI",
"Analytics"
]

.map(category=>(

<button

key={category}

onClick={()=>
setFilter(category)
}

className={

`px-6 py-2 rounded-full

${filter===category

?

"gradient-gold text-black"

:

"border"

}`

}

>

{category}

</button>

))
}

</div>

<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8">

{
filteredProjects.map(project=>(

<ProjectCard

key={project.id}

project={project}

/>

))
}

</div>

</section>

)

}