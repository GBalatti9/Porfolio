import React from 'react';
import StickyNote from './StickyNotes';

function Projects() {
    return (
        <div className="mt-5">
            <h1 className="font-bold font-montserrat text-3xl text-center">Mis proyectos</h1>
            <div className="flex items-center justify-center flex-wrap w-full">
                <StickyNote
                    projectName={'Paty de Cancha'}
                    backgroundImage={require('../assets/imgs/paty.jpeg')}
                    projectDescription={'Me preparé toda la vida para leer mi nombre en las fichas técnicas de las revistas de publicidad. No solo participé de este proyecto como creativo, sino que también como actor (aparezco en el segundo 12, atrás de la chica que se toma el bondi).'}
                    videos={[require('../assets/videos/PatydeCancha.mp4')]}
                />

                <StickyNote
                    projectName={'Coca - Cola'}
                    backgroundImage={require('../assets/imgs/cocanegro.jpeg')}
                    projectDescription={'Esta idea ya está hecha. Por gente real, que sube contenido a sus redes. Porque hacer un nuevo comercial, cuando en las redes hay miles y miles, con el valor mágico de estar hechos orgánicamente. Presentamos una campaña no basada en hechos reales, sino qué: Hechos mágicamente Reales.'}
                    videos={[require('../assets/videos/tiktoksCoca-Cola_5.mp4'), require('../assets/videos/tiktoksCoca-Cola_6.mp4'), require('../assets/videos/tiktoksCoca-Cola_7.mp4'), require('../assets/videos/tiktoksCoca-Cola_8.mp4'),require('../assets/videos/Video-N-1.mp4'), require('../assets/videos/Video-N-2.mp4'), require('../assets/videos/Video-N-2.mp4'), require('../assets/videos/Video-N-6.mp4'), require('../assets/videos/Video-N-7.mp4')]}
                />

                <StickyNote
                    projectName={'Blest'}
                    backgroundImage={require('../assets/imgs/blest.jpeg')}
                    projectDescription={'No hay una sola cuadra en Palermo que no tenga bares de cerveza artesanal: todos son cool y te invitan a vivir una experiencia única. Entonces, ¿cómo hace Blest para diferenciarse? Usando a la honestidad como diferencial, no solo porque sea gracioso, sino que porque la verdad vende.'}
                    photos={[require('../assets/imgs/Blest-ejemplo.png'), require('../assets/imgs/Blest-ejemplo2.png'), require('../assets/imgs/Blest-ejemplo3.png'), require('../assets/imgs/Blest-ejemplo4.png'), require('../assets/imgs/Blest-ejemplo5.png'), require('../assets/imgs/Blest-ejemplo5.png'), require('../assets/imgs/Blest-ejemplo6.png')]}
                />

                <StickyNote
                    projectName={'Cruz campo'}
                    backgroundImage={require('../assets/imgs/cruzampo.jpeg')}
                    projectDescription={'Cruzcampo es la cerveza típica de Andalucía lugar que en verano se llena de guiris. Son turistas ingleses de cualidades específicas (blancos, siempre se queman mal tomando sol, les encanta emborracharse y salir de fiesta). Esta campaña apunta a publicitarse en Inglaterra para que los guiris vuelvan a vacacionar a Andalucía post Covid.'}
                    photos={[require('../assets/imgs/Cruzcampo.jpeg'), require('../assets/imgs/cruzcampo-ejemplo2.jpeg'), require('../assets/imgs/cruzcampo-ejemplo3.jpeg'), require('../assets/imgs/cruzcampo-ejemplo4.jpeg'), require('../assets/imgs/cruzcampo-ejemplo5.jpeg'), require('../assets/imgs/cruzcampo-ejemplo6.jpeg'), require('../assets/imgs/cruzcampo-ejemplo7.jpeg')]}
                />

                <StickyNote

                    projectName={'Tinder'}
                    backgroundImage={require('../assets/imgs/tinder.jpeg')}
                    projectDescription={'Es un insight, lo mejor de las relaciones es el comienzo, y Tinder te ofrece principios constantes. Bajo esta observación, y con el recurso de finales de cuentos, hicimos estas gráficas mostrando lo que la rutina le hace al amor, pero por suerte ahí esta Tinder para ofrecerte comienzos.'}
                    photos={[require('../assets/imgs/Tinder.jpg'), require('../assets/imgs/tinder-ejemplo1.jpg'), require('../assets/imgs/tinder-ejemplo2.jpg')]}
                />

                <StickyNote
                    projectName={'Bici mad'}
                    backgroundImage={require('../assets/imgs/bicimad.jpeg')}
                    projectDescription={'BiciMad son las bicis estatales de España. Su diferencial es que son eléctricas, entonces al usarlas no transpiras. A partir de esta observación hicimos esta campaña.'}
                    photos={[require('../assets/imgs/Bicimad-ejemplo.png'), require('../assets/imgs/bicimad-ejemplo1.png'), require('../assets/imgs/bicimad-ejemplo2.png')]}
                />

                <StickyNote
                    projectName={'Julán Álvarez'}
                    projectDescription={'Todos los días voy a la agencia por la bicicenda de la calle Julián Álvarez. El miercoles 15 de diciembre, un día depues del partido contra Croacia, hice unos stickers y los pegue a lo largo de la calle. Fue mi humilde homenaje para Julian. Ayer, en telenoche, hicieron una nota en la que salieron varios de los stickers. Yo, argentino.'}
                    backgroundImage={require('../assets/imgs/julian-alvarez.jpeg')}
                    videos={[require('../assets/videos/JulianAlvarez.mp4')]}
                />

                <StickyNote
                    projectName={'Faro Digital'}
                    projectDescription={'Esta campaña gano el primer puesto en el LIAISONS 2023'}
                    backgroundImage={require('../assets/imgs/farodigital.jpeg')}
                    videos={[require('../assets/videos/FaroDigital.mp4')]}
                />
            </div>
        </div>
    );
}

export default Projects;