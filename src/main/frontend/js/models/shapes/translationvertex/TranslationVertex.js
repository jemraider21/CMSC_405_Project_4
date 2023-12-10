export class TranslationVertex {
    constructor(xAxis, yAxis) {
        this.vertex = new Float32Array([xAxis, yAxis, -20.0]);
    }
}
const TranslationVertexEnum = {
    TOP_LEFT: new TranslationVertex(-0.5, 0.5),
    TOP_RIGHT: new TranslationVertex(0.5, 0.5),
    BOTTOM_LEFT: new TranslationVertex(-0.5, -0.5),
    BOTTOM_RIGHT: new TranslationVertex(0.5, -0.5),
};
export const getRandomTranslationVertex = () => Object.values(TranslationVertexEnum)[Math.floor(Math.random() * Object.values(TranslationVertexEnum).length)];
