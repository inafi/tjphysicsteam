function initialize() {

    var SEPARATION = 160,
        AMOUNTX = 50,
        AMOUNTY = 30;

    var container;
    var camera, scene, renderer;
    var particles, particle, count = 0;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {
        var final = 0;
        container = document.querySelector('div.metric');
        camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
        scene = new THREE.Scene();
        particles = new Array();

        var PI2 = Math.PI * 2;
        var material = new THREE.ParticleCanvasMaterial({

            color: 0xffffff,
            program: function (context) {
                context.beginPath();
                context.arc(0, 0, .6, 0, PI2, true);
                context.fill();
            }

        });

        var i = 0;

        for (var ix = 0; ix < AMOUNTX; ix++) {
            for (var iy = 0; iy < AMOUNTY; iy++) {
                particle = particles[i++] = new THREE.Particle(material);
                particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
                particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
                scene.add(particle);
            }
        }

        renderer = new THREE.CanvasRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);
        window.addEventListener('resize', onWindowResize, false);
    }

    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    var radius = 0;
    var temp = 0;

    function animate() {
        if (radius < 800) {
            camera.position.z = radius;
            radius = -800 / (0.0008 * (temp + 1000)) + 1000;
            temp += 10;
        }
        requestAnimationFrame(animate);
        render();
    }

    function render() {
        camera.position.x += (0 - camera.position.x) * .05;
        camera.position.y += (1000 - camera.position.y) * .05;
        camera.lookAt(scene.position);

        var i = 0;

        for (var ix = 0; ix < AMOUNTX; ix++) {
            for (var iy = 0; iy < AMOUNTY; iy++) {
                particle = particles[i++];
                particle.position.y = (Math.sin((ix + count) * 0.3) * 90) + (Math.sin((iy + count) * 0.5) * 90);
                particle.scale.x = particle.scale.y = Math.max((Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2 + 3, 5);
            }
        }

        renderer.render(scene, camera);
        count += 0.03;
    }

    setInterval(function () {
        if ($(window).scrollTop() == 0) {
            $("nav").css('background-color', 'transparent');
            $("nav *").css('color', '#fff');
            $(".active").css('color', '#06D6A0');
            $("nav span:hover").css('color', '#06D6A0');
            $("nav img").attr("src", "Pics/copy3.png");
        } else {
            $("nav").css('background-color', '#fff');
            $("nav *").css('color', '#1B98E0');
            $(".active").css('color', '#3D348B');
            $("nav span:hover").css('color', '#06D6A0');
            $("nav img").attr("src", "Pics/copy.png");
        }
    }, 20)

    var ds = new DragSelect({
        selectables: document.querySelectorAll('p'),
        area: document.querySelector('body')
    });

    $('body').on('mousedown', 'p', function (event) {
        ds.removeSelection($(this).get(0));
    });
}
$(initialize);