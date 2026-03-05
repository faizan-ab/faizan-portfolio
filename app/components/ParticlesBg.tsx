"use client"

import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "tsparticles-slim"

export default function ParticlesBg() {

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000"
        },
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 1
          },
          links: {
            enable: true,
            color: "#ffffff"
          }
        }
      }}
    />
  )
}