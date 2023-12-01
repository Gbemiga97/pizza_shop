import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaPinterest } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-6 justify-center">
          {/* logo */}
          <Link 
          href={'#'}
          >
          <Image 
          src='logo.svg'
          width={180}
          height={180}
          alt="logo"
          />
          </Link>
          {/* social links */}
          <div className="flex gap-x-6 text-xl text-white ">
            <Link href={'#'}>
            <FaYoutube />
            </Link>
            <Link href={'#'}>
            <FaInstagram />
            </Link>
            <Link href={'#'}>
            <FaPinterest />
            </Link>
          </div>
          {/* copyright */}
          <small className="text-white font-medium">
            Copyright &copy; PizzaLand {new Date().getFullYear()}. All rights reserved
          </small>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
