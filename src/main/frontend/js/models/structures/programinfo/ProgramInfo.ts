
class UniformLocations{
   projectionMatrix: WebGLUniformLocation | null;
   modelViewMatrix: WebGLUniformLocation | null;

   constructor(gl: WebGLRenderingContext, shaderProgram: WebGLProgram){
       this.projectionMatrix = gl.getUniformLocation(shaderProgram, 'uProjectionMatrix');
       this.modelViewMatrix = gl.getUniformLocation(shaderProgram, 'uModelViewMatrix');
   }
}

class AttributeLocations{
    vertexPosition: GLint;
    vertexColor: GLint;
    constructor(gl: WebGLRenderingContext, shaderProgram: WebGLProgram){
        this.vertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
        this.vertexColor = gl.getAttribLocation(shaderProgram, 'aVertexColor');
    }
}

// Collect all the info needed to use the shader program.
// Look up which attributes our shader program is using
// for aVertexPosition, aVertexColor and also
// look up uniform locations.
export class ProgramInfo{
    program: WebGLProgram;
    attributeLocations: AttributeLocations;
    uniformLocations: UniformLocations;

    constructor(gl: WebGLRenderingContext, program: WebGLProgram){
        this.program = program;
        this.attributeLocations = new AttributeLocations(gl, program);
        this.uniformLocations = new UniformLocations(gl, program);
    }
}