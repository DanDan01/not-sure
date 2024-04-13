import Link from "next/link";



export default function Navigation() {
  return (
    <nav>
    <Link href="home">Home</Link>
    <Link href="things">Things</Link>
    <Link href="ideas">Ideas</Link>
  </nav>
  )
}