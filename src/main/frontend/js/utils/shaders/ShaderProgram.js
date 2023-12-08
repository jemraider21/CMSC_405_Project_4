class ShaderProgram {
    constructor(program) {
        this.program = program;
    }
}
export const ShaderProgramEnum = {
    VERTEX: new ShaderProgram(`
        attribute vec4 aVertexPosition;
        attribute vec4 aVertexColor;

        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        varying lowp vec4 vColor;

        void main(){
            gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
            vColor = aVertexColor;
        }
    `),
    FRAGMENT: new ShaderProgram(`
        varying lowp vec4 vColor;

        void main(){
            gl_FragColor = vColor;
        }
    `)
};
