import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {

    const particlesInit = async (main) => {
        // console.log(main);

      
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    return (
        <Particles
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}

            options={
                {
                    background: {
                       
                    },
                    fpsLimit:100,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 1,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "red",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 40,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }

            }


        />
    );
};

export default Particle;