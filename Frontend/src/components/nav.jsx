import React from 'react'
import { Routes, Route } from "react-router-dom"

const nav = () => {
  return (
    <div className='display: flex justify-between sticky left-0 top-0 backdrop-blur-xs z-100 p-6'>
        <h1 className='text-xl font-bold hidden md:block '>Praveen S</h1>
        <nav className='display: flex gap-5 '>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
        </nav>
    </div>
  )
}

export default nav