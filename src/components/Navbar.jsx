import React from 'react'
import { navLinks } from '../../constants'
const Navbar = () => {
    return (
        <nav className='flex-center'>
            <div>
                <a href="#home" className='flex items-center gap-2'>
                    <p>Velvet Pour</p>
                </a>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.title}>
                            <a href={link.href}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar