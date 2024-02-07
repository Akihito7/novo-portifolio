import React from "react"
import { Routes, Route} from "react-router-dom"

import { Home } from "../screens/Home"
import  {About } from "../screens/About"
import { Projects } from "../screens/Projects"

export function AppRoutes (){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
        </Routes>
    )
}