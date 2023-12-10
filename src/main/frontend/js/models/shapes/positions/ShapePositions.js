export class ShapePosition {
    constructor(position) {
        this.position = position;
    }
}
const ShapePositionEnum = {
    PERFECT_CUBE: new ShapePosition([
        -1.0, -1.0, +1.0, +1.0, -1.0, +1.0, +1.0, +1.0, +1.0, -1.0, +1.0, +1.0, // Front face
        -1.0, -1.0, -1.0, -1.0, +1.0, -1.0, +1.0, +1.0, -1.0, +1.0, -1.0, -1.0, // Back face
        -1.0, +1.0, -1.0, -1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, -1.0, // Top face
        -1.0, -1.0, -1.0, +1.0, -1.0, -1.0, +1.0, -1.0, +1.0, -1.0, -1.0, +1.0, // Bottom face
        +1.0, -1.0, -1.0, +1.0, +1.0, -1.0, +1.0, +1.0, +1.0, +1.0, -1.0, +1.0, // Right face
        -1.0, -1.0, -1.0, -1.0, -1.0, +1.0, -1.0, +1.0, +1.0, -1.0, +1.0, -1.0, // Left face
    ]),
    RECTANGLE: new ShapePosition([
        -1.0, +0.0, +1.0, -0.5, +0.0, +1.0, -0.5, +1.0, +1.0, -1.0, +1.0, +1.0, // Front face
        -1.0, +0.0, -1.0, -1.0, +1.0, -1.0, -0.5, +1.0, -1.0, -0.5, +0.0, -1.0, // Back face
        -1.0, +1.0, -1.0, -1.0, +1.0, +1.0, -0.5, +1.0, +1.0, -0.5, +1.0, -1.0, // Top face
        -1.0, +0.0, -1.0, -0.5, +0.0, -1.0, -0.5, +0.0, +1.0, -1.0, +0.0, +1.0, // Bottom face
        -0.5, +0.0, -1.0, -0.5, +1.0, -1.0, -0.5, +1.0, +1.0, -0.5, +0.0, +1.0, // Right face
        -1.0, +0.0, -1.0, -1.0, +0.0, +1.0, -1.0, +1.0, +1.0, -1.0, +1.0, -1.0, // Left face
    ]),
    ALMOST_PYRAMID: new ShapePosition([
        -1.0, -1.0, -1.0, +1.0, -1.0, -1.0, +1.0, -1.0, +1.0, -1.0, -1.0, +1.0, // Base
        -1.0, -1.0, -1.0, +1.0, -1.0, -1.0, +0.0, +1.0, +0.0, // Front face
        +1.0, -1.0, -1.0, +1.0, -1.0, +1.0, +0.0, +1.0, +0.0, // Right face
        +1.0, -1.0, +1.0, -1.0, -1.0, +1.0, +0.0, +1.0, +0.0, // Back face
        -1.0, -1.0, +1.0, -1.0, -1.0, -1.0, +0.0, +1.0, +0.0, // Left face
    ])
};
const getRandomShapePosition = () => Object.values(ShapePositionEnum)[Math.floor(Math.random() * Object.values(ShapePositionEnum).length)];
export const getRandomShapePositions = (numShapePositions) => Array.from({ length: numShapePositions }, () => getRandomShapePosition());
