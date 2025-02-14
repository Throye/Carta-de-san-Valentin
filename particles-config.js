particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": true,
                "value_area": 2000
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
            "value": 1,
            "random": false
        },
        "size": {
            "value": 10,
            "random": true
        },
        "move": {
            "enable": true,
            "speed": 2,
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
                "mode": "repulse"
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
