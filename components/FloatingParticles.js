import styles from '@/styles/FloatingParticles.module.css'
import Particles from 'react-tsparticles'

const params = {
    "fpsLimit": 60,
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
        },
        "move": {
            "enable" : true,
            "random": false,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        },
        "opacity": {
            "value": 0.5,
            "random": {
                "enable": true,
                "minimumValue": 0.2,
            },
        },
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": false,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            }
        },
    }
}

export default function FloatingParticles() {
    return <Particles className={styles.floatingParticles} options={params} />
}