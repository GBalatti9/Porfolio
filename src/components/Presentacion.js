import React from 'react';
// import videoFile from '../assets/videos/Publicidad1.mp4';

function Presentacion({ videoRef }) {
    return (
        <div className='contenedor-presentacion relative flex flex-col items-center justify-center p-10 h-[calc(100vh-80px)] sm:flex-row z-0'>
            <video className='fondo-video absolute top-0 left-0 w-full h-full object-cover blur-sm z-0' autoPlay loop muted ref={videoRef}>
                <source src='' type='video/mp4' />
            </video>
            <div className='imagen-circulo z-10 w-52 h-52 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover'
                    src={require('../assets/imgs/winston.jpeg')}
                    alt='Winston Churchill' />
            </div>
            <div className='informacion ml-2 z-10 w-full sm:w-1/3'>
                <h2 className='font-montserrat text-3xl text-center mt-2.5 w-full sm:text-left'>Hola! Soy <br className='sm:hidden'/><span className='font-bold'>Salvador Posse</span></h2>
                <p className='text-center mt-1 w-72 font-montserrat sm:break-words sm:w-full sm:text-left m-auto'>Tengo 23 años y me considero apasionado por la publicidad</p>
                <div className='button-group flex justify-around mt-2 w-3/4 sm:w-full sm:justify-around m-auto'>
                    <a href='#proyectos' className='p-1.5 rounded-md bg-white shadow-md text-center lg:w-1/3'>
                        <button>Proyectos</button>
                    </a>
                    <a href='#footer' className='p-1.5 rounded-md bg-slate-200 shadow-md text-center lg:w-1/3'>
                        <button>Charlemos</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Presentacion;