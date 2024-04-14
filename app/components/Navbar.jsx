import Link from "next/link"
import Image from "next/image"
import Logo from "./cutebear.png"

const Navbar = () => {
  return (
    <nav>
      <Image
        src={Logo}
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1>HelpDesk</h1>
      <Link href='/'>Dashboard</Link>
      <Link href='/tickets'>Tickets</Link>
    </nav>
  )
}

export default Navbar