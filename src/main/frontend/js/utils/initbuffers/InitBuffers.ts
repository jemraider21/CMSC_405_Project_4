import { FaceColorEnum } from '../../models/shapes/face/color/FaceColors.js';
import { BufferContainer } from "../../models/structures/buffercontainer/BufferContainer.js";
import { FaceIndicesEnum } from '../../models/shapes/face/indices/FaceIndices.js';

export function initBuffers(gl: WebGLRenderingContext, positions: number[]) {
    const positionBuffer: WebGLBuffer = initPositionBuffer(gl, positions);
    const colorBuffer: WebGLBuffer = initColorBuffer(gl);
    const indexBuffer: WebGLBuffer = initIndexBuffer(gl);
    return new BufferContainer(positionBuffer, colorBuffer, indexBuffer);
}

function initPositionBuffer(gl: WebGLRenderingContext, positions: number[]): WebGLBuffer {
    // Create a buffer for the square's positions.
    const positionBuffer: WebGLBuffer = gl.createBuffer() as WebGLBuffer;

    // Select the positionBuffer as the one to apply buffer
    // operations to from here out.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Now pass the list of positions into WebGL to build the
    // shape. We do this by creating a Float32Array from the
    // JavaScript array, then use it to fill the current buffer.
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
}

function initColorBuffer(gl: WebGLRenderingContext): WebGLBuffer {
    const faceColors: number[][] = [
        FaceColorEnum.WHITE.color,
        FaceColorEnum.RED.color,
        FaceColorEnum.GREEN.color,
        FaceColorEnum.BLUE.color,
        FaceColorEnum.YELLOW.color,
        FaceColorEnum.PURPLE.color
    ];

    // Convert the array of colors into a table for all the vertices.
    let colors: number[] = [];
    for (const element of faceColors) {
        // Repeat each color four times for the four vertices of the face
        colors = colors.concat(element, element, element, element);
    }

    const colorBuffer: WebGLBuffer = gl.createBuffer() as WebGLBuffer;
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    return colorBuffer;
}

function initIndexBuffer(gl: WebGLRenderingContext): WebGLBuffer {
    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.
    const indices = FaceIndicesEnum.FRONT.concat([
        FaceIndicesEnum.BACK,
        FaceIndicesEnum.TOP,
        FaceIndicesEnum.BOTTOM,
        FaceIndicesEnum.RIGHT,
        FaceIndicesEnum.LEFT
    ]);

    const indexBuffer: WebGLBuffer = gl.createBuffer() as WebGLBuffer;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    return indexBuffer;
}