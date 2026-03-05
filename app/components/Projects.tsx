"use client"

import { useEffect, useState } from "react"
import axios from "axios"

export default function Projects() {

 const [repos, setRepos] = useState<any[]>([])

 useEffect(() => {
   axios.get("https://api.github.com/users/faizan-ab/repos")
   .then(res => setRepos(res.data))
 }, [])

 return (
   <div className="grid md:grid-cols-2 gap-6">

     {repos.slice(0,6).map(repo => (
       <a
        key={repo.id}
        href={repo.html_url}
        target="_blank"
        className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition"
       >
        <h3 className="text-xl font-semibold">{repo.name}</h3>
        <p className="text-gray-400">{repo.description}</p>
       </a>
     ))}

   </div>
 )
}