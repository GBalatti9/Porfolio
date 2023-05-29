import React from 'react';
import StickyNote from './StickyNotes';

function Projects() {
    return(
        <div className='mt-5'>
            <h1 className='font-bold text-3xl text-center'>Mis proyectos</h1>
            <div className='flex items-center justify-center flex-wrap w-full'>

            <StickyNote 
            brand={'Paty'}
            projectName={'Paty de Cancha'}
            backgroundImage={require('../assets/imgs/Paty.png')}
            video={require('../assets/videos/PatydeCancha.mp4')}/>

            <StickyNote 
            brand={'Faro Digital'}
            projectName={'Campaña de concientización'}
            backgroundImage={require('../assets/imgs/arg.jpg')}
            video={require('../assets/videos/FaroDigital.mp4') }/>

            <StickyNote 
            brand={'Blest'}
            projectName={'Blest'}
            backgroundImage={require('../assets/imgs/Blest.png')}
            img={require('../assets/imgs/Blest-ejemplo.png')} />

            <StickyNote 
            brand={'Cruz campo'}
            projectName={'Cruz campo'}
            backgroundImage={require('../assets/imgs/Cruz-campo.png')}
            img={require('../assets/imgs/Cruzcampo.jpeg')} />

            <StickyNote 
            brand={'Tinder'}
            projectName={'Tinder'}
            backgroundImage={require('../assets/imgs/Tinder.png')}
            img={require('../assets/imgs/Tinder.jpg')} />

            <StickyNote 
            brand={'Bici mad'}
            projectName={'Bici mad'}
            backgroundImage={require('../assets/imgs/bicimad.png')}
            img={require('../assets/imgs/Bicimad-ejemplo.png')} />

            <StickyNote 
            brand={'Julián Álvarez'}
            projectName={'Julán Álvarez'}
            backgroundImage={require('../assets/imgs/Julian-Alvarez.png')}
            video={require('../assets/videos/JulianAlvarez.mp4')} />
            
            <StickyNote 
            brand={'Se socio'}
            projectName={'She Coin'}
            backgroundImage={require('../assets/imgs/Sesocio.png')}
            video={require('../assets/videos/SeSocio.mp4')} />
            
            </div>
            
        </div>
    )
};

export default Projects;