var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProgramInfo_instances, _ProgramInfo_initShaderProgram, _ProgramInfo_loadShader;
import { ShaderProgramEnum } from "../../../utils/shaders/ShaderProgram.js";
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
export class ProgramInfo {
    constructor(gl) {
        _ProgramInfo_instances.add(this);
        this.program = __classPrivateFieldGet(this, _ProgramInfo_instances, "m", _ProgramInfo_initShaderProgram).call(this, gl);
        this.attributeLocations = new AttributeLocations(gl, this.program);
        this.uniformLocations = new UniformLocations(gl, this.program);
    }
}
_ProgramInfo_instances = new WeakSet(), _ProgramInfo_initShaderProgram = function _ProgramInfo_initShaderProgram(gl) {
    const vertexShader = __classPrivateFieldGet(this, _ProgramInfo_instances, "m", _ProgramInfo_loadShader).call(this, gl, gl.VERTEX_SHADER, ShaderProgramEnum.VERTEX.program);
    const fragmentShader = __classPrivateFieldGet(this, _ProgramInfo_instances, "m", _ProgramInfo_loadShader).call(this, gl, gl.FRAGMENT_SHADER, ShaderProgramEnum.FRAGMENT.program);
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
}, _ProgramInfo_loadShader = function _ProgramInfo_loadShader(gl, type, source) {
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
};
