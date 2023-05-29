import React from 'react';

function Footer() {
    return (
        <div className='redes bg-slate-900 flex items-center justify-center h-20'>
            <h2 className='text-white'>salvadorgonzaloposse@gmail.com</h2>
            <ul className='flex items-center justify-center'>
                <a href='../App.js' className='px-6 text-white'><li><i class="fa-brands fa-instagram"></i></li></a>
                <a href='../App.js' className='text-white'><li><i class="fa-brands fa-twitter"></i></li></a>
            </ul>
        </div>
    )
};

export default Footer;