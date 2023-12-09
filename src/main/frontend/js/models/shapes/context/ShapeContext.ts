import { BufferContainer } from "../../structures/buffercontainer/BufferContainer.js";
import { TranslationVertex } from "../translationvertex/TranslationVertex.js";

export class ShapeContext{
    buffers: BufferContainer;
    vertex: TranslationVertex;

    constructor(buffers: BufferContainer, vertex: TranslationVertex){
        this.buffers = buffers;
        this.vertex = vertex;
    }
}