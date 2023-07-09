import { Sidebar } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import{FaShoppingCart} from 'react-icons/fa'
import {MdAddShoppingCart} from 'react-icons/md'
import {AiFillSetting} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function     SideBar() {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to={'/'} className='block mb-2'>
            <Sidebar.Item
              icon={HiHome}
            >
              <p>
                Home
              </p>
            </Sidebar.Item>
          </Link>
          <Link to={'/products'} className='block mb-2'>
            <Sidebar.Item
              icon={FaShoppingCart}
            >
              <p>
                Products
              </p>
            </Sidebar.Item>
          </Link>
          <Link to={'/add-product'} className='block mb-2'>
            <Sidebar.Item
              icon={MdAddShoppingCart}
            >
              <p>
                Add Product
              </p>
            </Sidebar.Item>
          </Link>
          <Link to={'/profile'} className='block mb-2'>
            <Sidebar.Item
              icon={BsFillPersonFill}
            >
              <p>
                Profile
              </p>
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


