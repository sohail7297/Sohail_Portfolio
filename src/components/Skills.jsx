import SkillBar from "./SkillBar";

import {

programmingSkills,
analyticsSkills,
designSkills,
toolSkills

}

from "../data/skills";

export default function Skills(){

return(

<section

id="skills"

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
mb-16">

Skills

</h2>

<div

className="
grid
lg:grid-cols-2
gap-12">

<div
className="
glass
p-8
rounded-3xl">

<h3
className="
text-2xl
mb-6
font-bold">

Programming

</h3>

{
programmingSkills.map(skill=>(

<SkillBar

key={skill.name}

skill={skill.name}

level={skill.level}

/>

))
}

</div>

<div
className="
glass
p-8
rounded-3xl">

<h3
className="
text-2xl
mb-6
font-bold">

Data Analytics

</h3>

{
analyticsSkills.map(skill=>(

<SkillBar

key={skill.name}

skill={skill.name}

level={skill.level}

/>

))
}

</div>

<div
className="
glass
p-8
rounded-3xl">

<h3
className="
text-2xl
mb-6
font-bold">

Graphic Design

</h3>

{
designSkills.map(skill=>(

<SkillBar

key={skill.name}

skill={skill.name}

level={skill.level}

/>

))
}

</div>

<div
className="
glass
p-8
rounded-3xl">

<h3
className="
text-2xl
mb-6
font-bold">

Tools

</h3>

{
toolSkills.map(skill=>(

<SkillBar

key={skill.name}

skill={skill.name}

level={skill.level}

/>

))
}

</div>

</div>

</section>

)

}