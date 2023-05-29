import React from 'react';

function Header({ videoRef }) {
    return (
        <div className='top-0 container-header flex flex-col h-20 p-2 mb-0 sm:flex-row items-center z-0'>
            <video className='fondo-video absolute top-0 left-0 w-full h-full object-cover blur-sm z-0' autoPlay loop muted ref={videoRef}>
                <source src='' type='video/mp4' />
            </video>
            <a href='../App.js' className='w-full text-center text-2xl font-bebas-neue sm:text-left px-10 z-10 text-white'><h1>Salvador Posse</h1></a>
            <nav className='navegation-menu w-full border-orange-300 m-0 z-10 text-white'>
                <ul className='flex justify-around font-montserrat'>
                    <a href='#proyectos' className='hover:underline font-bold'>
                        <li>Proyectos</li>
                    </a>
                    <a href='#sobre-mi' className='hover:underline font-bold'>
                        <li>Sobre mí</li>
                    </a>
                    <a href='#footer' className='hover:underline font-bold'>
                        <li>Contacto</li>
                    </a>
                </ul>
            </nav>
        </div>
    );
}

export default Header;