threeJS_Boilerplate
===================

A basic boilerplate to use when fiddling with Three JS.

Usage:
------

    //Init it.
    MOS.tbp.run({hideAxis: true});

    //Add a box
    var myBox = new THREE.Mesh(new THREE.BoxGeometry(30, 30, 30), new THREE.MeshLambertMaterial({
        color: 0x888800
    }));
    MOS.tbp.scene.add(myBox);

    //Do things on frame tick
    MOS.tbp.tick = function () {

        myBox.rotation.y += 0.05;

    };
