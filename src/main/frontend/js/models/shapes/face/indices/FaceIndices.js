class FaceIndices {
    constructor(indices) {
        this.indices = indices;
    }
    concat(faces) {
        let result = this.indices;
        for (const face of faces) {
            result = result.concat(face.indices);
        }
        return result;
    }
}
export const FaceIndicesEnum = {
    FRONT: new FaceIndices([0, 1, 2, 0, 2, 3]),
    BACK: new FaceIndices([4, 5, 6, 4, 6, 7]),
    TOP: new FaceIndices([8, 9, 10, 8, 10, 11]),
    BOTTOM: new FaceIndices([12, 13, 14, 12, 14, 15]),
    RIGHT: new FaceIndices([16, 17, 18, 16, 18, 19]),
    LEFT: new FaceIndices([20, 21, 22, 20, 22, 23]),
};
