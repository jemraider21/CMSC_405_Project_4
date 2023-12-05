declare class UniformLocations {
    projectionMatrix: WebGLUniformLocation | null;
    modelViewMatrix: WebGLUniformLocation | null;
    constructor(gl: WebGLRenderingContext, shaderProgram: WebGLProgram);
}
declare class AttributeLocations {
    vertexPosition: GLint;
    vertexColor: GLint;
    constructor(gl: WebGLRenderingContext, shaderProgram: WebGLProgram);
}
export declare class ProgramInfo {
    program: WebGLProgram;
    attributeLocations: AttributeLocations;
    uniformLocations: UniformLocations;
    constructor(gl: WebGLRenderingContext, program: WebGLProgram);
}
export {};
