"use client"
import Link from "next/link"
import Navigation from "./navigation"


export default function Header(){
  return (
    <header className="flex justify-between w-full">
      <div>
        <h1>Not Sure</h1>
      </div>
      <div>
        <Navigation />
      </div>
    </header>
  )
}