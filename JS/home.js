function initialize() {

    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }

    var SEPARATION = 160,
        AMOUNTX = 45,
        AMOUNTY = 30;

    var container;
    var camera, scene, renderer;
    var particles, particle, count = 0;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    if (!isMobile) {
        init();
        animate();
    } else {
        $(".metric-cover .back").css("display", "unset");
    }

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
    var showing = 1;

    $.fn.isOnScreen = function () {
        var win = $(window);
        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();
        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    window.addEventListener('scroll', () => {
        if ($('.metric').isOnScreen() == true)
            showing = 1;
        else
            showing = 0;
    });

    function animate() {
        if (radius < 800) {
            camera.position.z = radius;
            radius = -800 / (0.0008 * (temp + 1000)) + 1000;
            temp += 10;
        }
        requestAnimationFrame(animate);
        if (showing == 1)
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
                particle.position.y = (Math.sin((ix + count) * 0.3) * 110) + (Math.sin((iy + count) * 0.5) * 110);
                particle.scale.x = particle.scale.y = Math.max((Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2 + 3, 5);
            }
        }

        renderer.render(scene, camera);
        count += 0.03;
    }

    var prev = -1;
    var curr = 0;
    setInterval(function () {
        curr = $(window).scrollTop() + $(window).width();
        if (curr != prev) {
            if ($(window).scrollTop() == 0 && !isMobile && $(window).width() > $(window).height() * 1.3) {
                $("nav").css('background-color', 'transparent');
                $("nav *").css('color', '#fff');
                $(".active").css('color', '#06D6A0');
                $("nav span:hover").css('color', '#06D6A0');
                $("nav img").attr("src", "Pics/copy3.png");
                $("nav").css('box-shadow', 'none');
            } else {
                $("nav").css('background-color', '#fff');
                $("nav *").css('color', '#1B98E0');
                $(".active").css('color', '#3D348B');
                $("nav span:hover").css('color', '#06D6A0');
                $("nav img").attr("src", "Pics/copy.png");
                $("nav").css('box-shadow', `
                    0 2.8px 2.2px rgba(0, 0, 0, 0.014),
                    0 6.7px 5.3px rgba(0, 0, 0, 0.018),
                    0 1.5px 2px rgba(0, 0, 0, 0.02),
                    0 2.3px 2px rgba(0, 0, 0, 0.022),
                    0 3.8px 2px rgba(0, 0, 0, 0.026),
                    0 4px 5px rgba(0, 0, 0, 0.05)`);

                if ($("nav #nav-icon3").attr("expanded") == "true") {
                    $("nav #nav-icon3").click();
                }
            }
        }
        prev = curr;
    }, 50)

    try {
        var ds = new DragSelect({
            selectables: document.querySelectorAll('p'),
            area: document.querySelector('body')
        });

        $('body').on('mousedown', 'p', function (event) {
            ds.removeSelection($(this).get(0));
        });

    } catch (error) {

    }

    var css = `
    @media only screen and (orientation:portrait) {

        html,
        body {
            overflow-x: hidden;
        }
    
        body,
        .row {
            margin-right: 0 !important;
            margin-left: 0 !important;
        }
    
        .metric-cover p {
            top: 15vh;
        }
    
        .b1 p.label {
            width: 80%;
        }
    
        .b1 p.desc {
            width: 90%;
        }
    
        .b2 .row>div,
        .b3 .col-5 {
            min-width: 40vh;
        }

        .b3 .col-5 {
            margin-top: 1vh;
            margin-bottom: 1vh;
        }
    
        .b3 .img-wrap {
            display: none;
        }
    }
    `

    if (isMobile) {
        $("head").append('<style>' + css + '</style>');
    }
}
$(initialize);