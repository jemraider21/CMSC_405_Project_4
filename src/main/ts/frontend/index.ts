import { ShapePositionEnum } from "./models/shapes/ShapePositions";
import { BufferContainer } from "./models/structures/BufferContainer";
import { ProgramInfo } from "./models/structures/ProgramInfo";
import { initBuffers } from "./utils/InitBuffers";
import { drawScene } from "./utils/DrawScene";

alert("Script is working");

let cubeRotation: number = 0.0;
let deltaTime: number = 0;

main();

function main(){
    const canvas: HTMLCanvasElement = document.getElementById("glCanvas") as HTMLCanvasElement;
    const gl: WebGLRenderingContext = canvas.getContext("webgl") as WebGLRenderingContext;
    if(gl === null){
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
    gl.clearDepth(gl.COLOR_BUFFER_BIT); // Clear the color buffer with specified clear color

    // Vertex shader program
    const vsSource: string = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vColor = aVertexColor;
    }
  `;

  // Fragment shader program
  const fsSource: string = `
    varying lowp vec4 vColor;

    void main(void) {
      gl_FragColor = vColor;
    }
  `;

  // Initialize a shader program; this is where all the lighting
  // for the vertices and so forth is established.
  const shaderProgram: WebGLProgram = initShaderProgram(gl, vsSource, fsSource);
  const programInfo: ProgramInfo = new ProgramInfo(gl, shaderProgram);

  // Here's where we call the routine that builds all the
  // objects we'll be drawing.
  const buffers: BufferContainer = initBuffers(gl, ShapePositionEnum.PERFECT_CUBE.position);

  // Draw the scene repeatedly
  let then: number = 0;
  function render(now: number){
      now *= 0.001; // convert to seconds
      deltaTime = now - then;
      then = now;

      drawScene(gl, programInfo, buffers, cubeRotation, canvas.width, canvas.height);
      cubeRotation += deltaTime;

      requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

//
// Initialize a shader program, so WebGL knows how to draw our data
//
function initShaderProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string): WebGLProgram {
    const vertexShader: WebGLShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader: WebGLShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    // Create the shader program
    const shaderProgram: WebGLProgram = gl.createProgram() as WebGLProgram;
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    // If creating the shader program failed, alert
    if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)){
        alert("Unable to initialize the shader program: " + gl.getProgramInfoLog(shaderProgram));
        return null as unknown as WebGLProgram;
    }

    return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
    const shader: WebGLShader = gl.createShader(type) as WebGLShader;

    // Send the source to the shader object
    gl.shaderSource(shader, source);

    // Compile the shader program
    gl.compileShader(shader);

    // See if it compiled successfully
    if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
        alert("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null as unknown as WebGLShader;
    }

    return shader;
}

