"use client"

import { useEffect, useState } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "tsparticles-slim"

export default function ParticlesBg() {

 const [init, setInit] = useState(false)

 useEffect(() => {
  loadSlim().then(() => setInit(true))
 }, [])

 if (!init) return null

 return (
  <Particles
   options={{
    background: { color: "#000" },
    particles: {
      number: { value: 50 },
      size: { value: 2 },
      move: { enable: true, speed: 1 },
      links: { enable: true, color: "#ffffff" }
    }
   }}
  />
 )
}