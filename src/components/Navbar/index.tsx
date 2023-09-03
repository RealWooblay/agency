import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import DropdownComponent from './Dropdown';
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-transparent py-4">
            <div className=" mx-auto flex justify-between items-center text-blue-50">
                <div className="flex items-center">
                    <FaDiscord className="w-20 h-20" />
                    <DropdownComponent />
                </div>

                <ul className="flex space-x-6">
                    <li className="hover:text-lime-400"><Link href={'/'}>Home</Link></li>
                    <li className="hover:text-lime-400"><Link href={'/expertise'}>Expertise</Link></li>
                    <li className="hover:text-lime-400"><Link href={'/'}>Specifications</Link></li>
                    <li className="hover:text-lime-400"><Link href={'/origins'}>Origins</Link></li>
                    <li className="relative pl-20">
                        <span className="block border-lime-400 border text-xl rounded px-2 py-1">
                            <Link href={'/'}>Join Us</Link>
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}