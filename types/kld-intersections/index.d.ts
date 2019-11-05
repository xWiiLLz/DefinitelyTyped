// Type definitions for kld-intersections 0.6
// Project: https://github.com/thelonious/kld-intersections
// Definitions by: William Bergeron-Drouin <https://github.com/xWiiLLz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ShapeNames =
    | 'Arc'
    | 'Bezier2'
    | 'Bezier3'
    | 'Circle'
    | 'Ellipse'
    | 'Line'
    | 'Path'
    | 'Polygon'
    | 'Polyline'
    | 'Rectangle';

export class Point2D {
    x: number;
    y: number;

    constructor(x: number, y: number);
}

export class ShapeInfo<Name extends ShapeNames, T> {
    args: T;
    name: Name;

    constructor(name: ShapeNames, args: T);

    static line(p1x: number, p1y: number, p2x: number, p2y: number): ShapeInfo<'Line', [Point2D, Point2D]>;

    static arc(
        centerX: number,
        centerY: number,
        radiusX: number,
        radiusY: number,
        startRadians: number,
        endsRadians: number,
    ): ShapeInfo<'Arc', [Point2D, number, number, number, number]>;
}
