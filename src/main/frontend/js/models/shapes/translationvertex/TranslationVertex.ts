export class TranslationVertex{
    vertex: Float32Array;

    constructor(xAxis: number, yAxis: number){
        this.vertex = new Float32Array([xAxis, yAxis, -20.0]);
    }
}

const TranslationVertexEnum = {
    TOP_LEFT: new TranslationVertex(-0.5, 0.5),
    TOP_RIGHT: new TranslationVertex(0.5, 0.5),
    BOTTOM_LEFT: new TranslationVertex(-0.5, -0.5),
    BOTTOM_RIGHT: new TranslationVertex(0.5, -0.5),
} as const;

export const getRandomTranslationVertex = (): TranslationVertex => 
    Object.values(TranslationVertexEnum)[Math.floor(Math.random() * Object.values(TranslationVertexEnum).length)];