particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 40,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "shape": {
            "type": "image",
            "image": {
                "src": "img/corazon_fondo.png",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.8,
            "random": true
        },
        "size": {
            "value": 6,
            "random": true
        },
        "move": {
            "enable": true,
            "speed": 0.8,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        },
        "line_linked": {
            "enable": false
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse",
                "repulse": {
                    "distance": 50,
                    "duration": 0.4
                }
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 50,
                "duration": 0.4
            }
        }
    },
    "retina_detect": true
});
