'use client';

import { Sidebar } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import{FaShoppingCart} from 'react-icons/fa'
import {SiSimpleanalytics} from 'react-icons/si'
import {AiFillSetting} from 'react-icons/ai'

export default function     SideBar() {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href=""
            icon={HiHome}
          >
            <p>
              Home
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/products"
            icon={FaShoppingCart}
          >
            <p>
              Products
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={SiSimpleanalytics}
          >
            <p>
              Analytics
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={AiFillSetting}
          >
            <p>
              Settings
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

