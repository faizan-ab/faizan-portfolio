"use client"

import { motion } from "framer-motion"
import Projects from "./components/Projects"

export default function Home() {

 return (
  <main className="bg-black text-white min-h-screen px-10 py-20">

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

  <section className="text-center mb-32">

  <h2 className="text-3xl font-bold mb-10">
   Skills
  </h2>

  <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">

  {["AWS","Docker","Kubernetes","Terraform","Jenkins","Linux"].map(skill => (

  <div
   key={skill}
   className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition"
  >
   {skill}
  </div>

  ))}

  </div>

  </section>


  {/* Projects */}

  <section className="max-w-5xl mx-auto mb-32">

  <h2 className="text-3xl font-bold text-center mb-10">
   Projects
  </h2>

  <Projects/>

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