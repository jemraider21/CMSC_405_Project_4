export class BufferContainer {
    positionBuffer: WebGLBuffer;
    colorBuffer: WebGLBuffer;
    indexBuffer: WebGLBuffer;

    constructor(positionBuffer: WebGLBuffer, colorBuffer: WebGLBuffer, indexBuffer: WebGLBuffer) {
        this.positionBuffer = positionBuffer;
        this.colorBuffer = colorBuffer;
        this.indexBuffer = indexBuffer;
    }
}