import { ShapePositionEnum } from "../models/shapes/positions/ShapePositions.js";
import { BufferContainer } from "../models/structures/buffercontainer/BufferContainer.js";
import { ProgramInfo } from "../models/structures/programinfo/ProgramInfo.js";
import { initBuffers } from "../utils/initbuffers/InitBuffers.js";
import { drawScene } from "../utils/drawscene/DrawScene.js";

alert("Script is working");

let cubeRotation: number = 0.0;
let deltaTime: number = 0;

main();

function main(){
    const canvas: HTMLCanvasElement = document.getElementById("glcanvas") as HTMLCanvasElement;
    const gl: WebGLRenderingContext = canvas.getContext("webgl") as WebGLRenderingContext;
    if(gl === null){
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
    gl.clearDepth(gl.COLOR_BUFFER_BIT); // Clear the color buffer with specified clear color


  // Initialize a shader program; this is where all the lighting
  // for the vertices and so forth is established.
  const programInfo: ProgramInfo = new ProgramInfo(gl);

  // Here's where we call the routine that builds all the
  // objects we'll be drawing.
  const buffers: BufferContainer = initBuffers(gl, ShapePositionEnum.PERFECT_CUBE.position);

  // Draw the scene repeatedly
  let then: number = 0;
  function render(now: number){
      now *= 0.001; // convert to seconds
      deltaTime = now - then;
      then = now;

      drawScene(gl, programInfo, buffers, cubeRotation);
      cubeRotation += deltaTime;

      requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}



