"use client"

import { motion } from "framer-motion"
import Projects from "./components/Projects"
import { FaDocker, FaAws, FaJenkins, FaLinux, FaGitAlt } from "react-icons/fa"
import Terminal from "./components/Terminal"
import ParticlesBg from "./components/ParticlesBg"

export default function Home() {

 return (
  <main className="bg-black text-white min-h-screen px-10 py-20">
  <ParticlesBg/>
  {/* Hero */}

  <motion.section
   initial={{opacity:0,y:50}}
   animate={{opacity:1,y:0}}
   transition={{duration:0.6}}
   className="text-center mb-32"
  >

  <h1 className="text-5xl font-bold mb-6">
   Mohammed Abdul Faizan
  </h1>

  <p className="text-xl text-gray-400">
   DevOps & Cloud Engineer
  </p>
  <Terminal/>
  </motion.section>


  {/* About */}

  <section className="max-w-3xl mx-auto text-center mb-32">

  <h2 className="text-3xl font-bold mb-6">
   About Me
  </h2>

  <p className="text-gray-400">
   Passionate about cloud infrastructure, automation and CI/CD pipelines.
   Skilled in AWS, Docker, Terraform, Kubernetes and Jenkins.
  </p>

  </section>


  {/* Skills */}

  <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-4xl text-center">

<div>
<FaAws />
<p className="text-sm mt-2">AWS</p>
</div>

<div>
<FaDocker />
<p className="text-sm mt-2">Docker</p>
</div>

<div>
<FaJenkins />
<p className="text-sm mt-2">Jenkins</p>
</div>

<div>
<FaLinux />
<p className="text-sm mt-2">Linux</p>
</div>

<div>
<FaGitAlt />
<p className="text-sm mt-2">Git</p>
</div>

</div>


  {/* Projects */}

  <section className="max-w-5xl mx-auto mb-32">

  <h2 className="text-3xl font-bold text-center mb-10">
   Projects
  </h2>

  <Projects/>

  </section>
  <section className="text-center mt-20">

<h2 className="text-3xl font-bold mb-6">
GitHub Stats
</h2>

<img src="https://github-readme-stats.vercel.app/api?username=faizan-ab&show_icons=true&theme=dark"/>

</section>


  {/* Contact */}

  <section className="text-center">

  <h2 className="text-3xl font-bold mb-6">
   Contact
  </h2>

  <p className="text-gray-400">
   mohdfaizan7988@gmail.com
  </p>

  <p className="text-gray-400">
   LinkedIn: linkedin.com/in/mohammed-abdul-faizan-3b0070263
  </p>

  </section>

  </main>
 )
}