import React from 'react'

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import Navbar from './Navbar'
import SideBar from './SideBar'


type LayoutProps = {
    children:React.ReactNode
}

const Layout = ({children}:LayoutProps) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <Navbar setIsOpen={setIsOpen}/>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <SideBar/>
            </Drawer>
            <div className=' px-5 py-8'>
                {children}
            </div>
        </>
    )
}

export default Layout