"use client"

import Particles from "react-tsparticles"

export default function ParticlesBg(){

return(

<Particles
 options={{
   background:{color:"#000"},
   particles:{
     number:{value:60},
     size:{value:2},
     move:{enable:true,speed:1},
     links:{enable:true,color:"#ffffff"}
   }
 }}
/>

)

}