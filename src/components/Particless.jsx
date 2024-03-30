import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

function Particless() {
    const particlesInit = useCallback(async engine => {
        console.log();

        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log();
    }, []);

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        // background: {
        //     color: {
        //         value: "#0d47a1",
        //     },
        // },
        fpsLimit: 60,
        fullScreen:{
            enable: false,
            zIndex: 0
        },
        style:{
            position: 'absolute'
        },
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
                    quantity: 2,
                },
                repulse: {
                    distance: 50,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#00BFFF",
                distance: 90,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
                
            },
            number: {
                density: {
                    enable: true,
                    area: 1000,
                },
                value: 50,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 6 },
            },
        },
        detectRetina: true,
    }}
/>
  )
}

export default Particless