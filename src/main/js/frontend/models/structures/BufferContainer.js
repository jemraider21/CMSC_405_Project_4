"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BufferContainer = void 0;
class BufferContainer {
    constructor(positionBuffer, colorBuffer, indexBuffer) {
        this.positionBuffer = positionBuffer;
        this.colorBuffer = colorBuffer;
        this.indexBuffer = indexBuffer;
    }
}
exports.BufferContainer = BufferContainer;
