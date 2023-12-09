import { ShaderProgramEnum } from "../../../utils/shaders/ShaderProgram.js";

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

    constructor(gl: WebGLRenderingContext){
        this.program = this.#initShaderProgram(gl);
        this.attributeLocations = new AttributeLocations(gl, this.program);
        this.uniformLocations = new UniformLocations(gl, this.program);
    }

    //
    // Initialize a shader program, so WebGL knows how to draw our data
    //
    #initShaderProgram(gl: WebGLRenderingContext): WebGLProgram {
        const vertexShader: WebGLShader = this.#loadShader(gl, gl.VERTEX_SHADER, ShaderProgramEnum.VERTEX.program);
        const fragmentShader: WebGLShader = this.#loadShader(gl, gl.FRAGMENT_SHADER, ShaderProgramEnum.FRAGMENT.program);

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
    #loadShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
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
}