"use client"
import Link from "next/link"
import Navigation from "./navigation"


export default function Header(){
  return (
    <header className="">
      <div>
        <h1 className="">Not Sure</h1>
      </div>
      <div>
        <Navigation />
      </div>
    </header>
  )
}