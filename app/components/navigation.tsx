import Link from "next/link";



export default function Navigation() {
  return (
    <nav className="">
      <Link href="home">Home</Link>
      <Link href="compositions">Compositions</Link>
      <Link href="ideas">Ideas</Link>
  </nav>
  )
}