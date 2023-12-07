class FaceColor {
    constructor(color) {
        this.color = color;
    }
}
export const FaceColorEnum = {
    RED: new FaceColor([1.0, 0.0, 0.0, 1.0]),
    GREEN: new FaceColor([0.0, 1.0, 0.0, 1.0]),
    BLUE: new FaceColor([0.0, 0.0, 1.0, 1.0]),
    YELLOW: new FaceColor([1.0, 1.0, 0.0, 1.0]),
    PURPLE: new FaceColor([1.0, 0.0, 1.0, 1.0]),
    CYAN: new FaceColor([0.0, 1.0, 1.0, 1.0]),
    BLACK: new FaceColor([0.0, 0.0, 0.0, 1.0]),
    WHITE: new FaceColor([1.0, 1.0, 1.0, 1.0]),
};
