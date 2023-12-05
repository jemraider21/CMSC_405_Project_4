"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramInfo = void 0;
class UniformLocations {
    constructor(gl, shaderProgram) {
        this.projectionMatrix = gl.getUniformLocation(shaderProgram, 'uProjectionMatrix');
        this.modelViewMatrix = gl.getUniformLocation(shaderProgram, 'uModelViewMatrix');
    }
}
class AttributeLocations {
    constructor(gl, shaderProgram) {
        this.vertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
        this.vertexColor = gl.getAttribLocation(shaderProgram, 'aVertexColor');
    }
}
// Collect all the info needed to use the shader program.
// Look up which attributes our shader program is using
// for aVertexPosition, aVertexColor and also
// look up uniform locations.
class ProgramInfo {
    constructor(gl, program) {
        this.program = program;
        this.attributeLocations = new AttributeLocations(gl, program);
        this.uniformLocations = new UniformLocations(gl, program);
    }
}
exports.ProgramInfo = ProgramInfo;
