var canvas = document.getElementById("world");
var glBoostContext = new GLBoost.GLBoostMiddleContext(canvas);
var renderer = glBoostContext.createRenderer({
    clearColor: {
        red: 0.6,
        green: 0.6,
        blue: 0.6,
        alpha: 1
    }
});
var scene = glBoostContext.createScene();

var pointLight = glBoostContext.createPointLight(new GLBoost.Vector3(1.0, 1.0, 1.0));
pointLight.translate = new GLBoost.Vector3(10, 10, 10);
scene.addChild(pointLight);

var camera = glBoostContext.createPerspectiveCamera({
    eye: new GLBoost.Vector3(0.0, 1.0, 10),
    center: new GLBoost.Vector3(0.0, 1.0, 0.0),
    up: new GLBoost.Vector3(0.0, 1.0, 0.0)
}, {
    fovy: 45.0,
    aspect: 1.0,
    zNear: 0.1,
    zFar: 300.0
});
scene.addChild(camera);

var glTFLoader = GLBoost.GLTFLoader.getInstance();
var promise = glTFLoader.loadGLTF(glBoostContext, '../../../sampleModels/BoxTextured/glTF-Embedded/BoxTextured.gltf', 1, null);
promise.then(function(mesh) {
    console.log(mesh);
    scene.addChild(mesh);
    window.mesh = mesh;
    
    var expression = glBoostContext.createExpressionAndRenderPasses(1);
    expression.renderPasses[0].scene = scene;
    expression.prepareToRender();
    
    var angle = 0;
    var axis = new GLBoost.Vector3(1,1,1);
   
    var render = function() {
        renderer.clearCanvas();
        renderer.draw(expression);
/*
        var rotateMatrix = GLBoost.Matrix33.rotateY(-1.0);
        var rotatedVector = rotateMatrix.multiplyVector(camera.eye);
        camera.eye = rotatedVector;
*/
        // quaternion �ɂ���]
        mesh.quaternion = GLBoost.Quaternion.axisAngle(axis, GLBoost.MathUtil.radianToDegree(angle));
        angle += 0.02;

        requestAnimationFrame(render);
    };
    render();
});