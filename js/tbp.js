/*
 * MOS.tbp 1.0 (Three.js Boilerplate)
 *
 * Mattias Johansson
 * Copyright 2016, Licensed GPL & MIT
 */

var MOS = window.MOS || {};
MOS.tbp = (function() {

    // Private methods & properties ***
    var _SCREEN_WIDTH = window.innerWidth,
        _SCREEN_HEIGHT = window.innerHeight,
        _VIEW_ANGLE = 45,
        _ASPECT = _SCREEN_WIDTH / _SCREEN_HEIGHT,
        _NEAR = 0.1,
        _FAR = 20000;

    var _camSpinVal = 0;

    function _animate() {

        requestAnimationFrame(_animate);
        MOS.tbp.tick();
        MOS.tbp.renderer.render(MOS.tbp.scene, MOS.tbp.camera);

    }

    function _run(opt) {

        opt = opt || {};
        opt.hideAxis = opt.hideAxis || false;

        MOS.tbp.scene = new THREE.Scene();

        MOS.tbp.camera = new THREE.PerspectiveCamera(_VIEW_ANGLE, _ASPECT, _NEAR, _FAR);
        MOS.tbp.camera.position.set(100, 100, 400);
        MOS.tbp.camera.lookAt(MOS.tbp.scene.position);
        MOS.tbp.scene.add(MOS.tbp.camera);

        MOS.tbp.renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        MOS.tbp.renderer.setSize(_SCREEN_WIDTH, _SCREEN_HEIGHT);
        MOS.tbp.container = document.getElementById('ThreeJS');
        MOS.tbp.container.appendChild(MOS.tbp.renderer.domElement);

        MOS.tbp.light = new THREE.DirectionalLight(0xffffff); //new THREE.PointLight(0xffffff);
        MOS.tbp.light.position.set(30, 80, -15);
        MOS.tbp.scene.add(MOS.tbp.light);

        if (!opt.hideAxis) {
            var axes = new THREE.AxisHelper(1000);
            MOS.tbp.scene.add(axes);
        }

        _animate();

    }

    // Public methods & properties ***
    return {
        run: _run,
        scene: {},
        camera: {},
        renderer: {},
        container: {},
        light: {},
        tick: function() {}
    };
}());
