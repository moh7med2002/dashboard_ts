import { Avatar, Navbar } from 'flowbite-react';
import { FiMenu } from 'react-icons/fi';


type NavProps ={
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavbarWithDropdown({setIsOpen}:NavProps) {
  return (
    <Navbar
        fluid
        rounded
    >
        <Navbar.Brand>
            <FiMenu size={22} onClick={()=>setIsOpen(true)} className=' cursor-pointer'/>
            <span className="self-center whitespace-nowrap text-xl font-semibold ml-10">
                Dashboard
            </span>
        </Navbar.Brand>
        <div className="flex">
            <Avatar rounded/>
        </div>
    </Navbar>
  )
}


