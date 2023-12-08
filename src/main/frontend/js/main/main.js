import { ShapePositionEnum } from "../models/shapes/positions/ShapePositions.js";
import { ProgramInfo } from "../models/structures/programinfo/ProgramInfo.js";
import { initBuffers } from "../utils/initbuffers/InitBuffers.js";
import { drawScene } from "../utils/drawscene/DrawScene.js";
import { ShaderProgramEnum } from "../utils/shaders/ShaderProgram.js";
alert("Script is working");
let cubeRotation = 0.0;
let deltaTime = 0;
main();
function main() {
    const canvas = document.getElementById("glcanvas");
    const gl = canvas.getContext("webgl");
    if (gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
    gl.clearDepth(gl.COLOR_BUFFER_BIT); // Clear the color buffer with specified clear color
    // Initialize a shader program; this is where all the lighting
    // for the vertices and so forth is established.
    const shaderProgram = initShaderProgram(gl);
    const programInfo = new ProgramInfo(gl, shaderProgram);
    // Here's where we call the routine that builds all the
    // objects we'll be drawing.
    const buffers = initBuffers(gl, ShapePositionEnum.PERFECT_CUBE.position);
    // Draw the scene repeatedly
    let then = 0;
    function render(now) {
        now *= 0.001; // convert to seconds
        deltaTime = now - then;
        then = now;
        drawScene(gl, programInfo, buffers, cubeRotation);
        cubeRotation += deltaTime;
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
//
// Initialize a shader program, so WebGL knows how to draw our data
//
function initShaderProgram(gl) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, ShaderProgramEnum.VERTEX.program);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, ShaderProgramEnum.FRAGMENT.program);
    // Create the shader program
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    // If creating the shader program failed, alert
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert("Unable to initialize the shader program: " + gl.getProgramInfoLog(shaderProgram));
        return null;
    }
    return shaderProgram;
}
//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
    const shader = gl.createShader(type);
    // Send the source to the shader object
    gl.shaderSource(shader, source);
    // Compile the shader program
    gl.compileShader(shader);
    // See if it compiled successfully
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}
