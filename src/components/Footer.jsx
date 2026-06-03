import {
FaGithub,
FaLinkedin,
FaEnvelope
}
from "react-icons/fa";

export default function Footer(){

return(

<footer

className="
py-10
mt-20
border-t
text-center">

<h3
className="
gold-text
text-2xl
font-bold">

Sohail Khan

</h3>

<p
className="
text-gray-400
mt-3">

Data Analyst • Graphic Designer

</p>

<div
className="
flex
justify-center
gap-6
mt-5
text-2xl">

<a
href="https://github.com/sohail7297">

<FaGithub/>

</a>

<a
href="https://www.linkedin.com/in/sohail-khan-1716aa35b">

<FaLinkedin/>

</a>

<a
href="mailto:sohailkhan74336@gmail.com">

<FaEnvelope/>

</a>

</div>

<p
className="
mt-6
text-gray-500">

© 2026 Sohail Khan.
All Rights Reserved.

</p>

</footer>

)

}