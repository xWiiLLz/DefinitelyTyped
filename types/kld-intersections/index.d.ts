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

    static quadraticBezier(
        p1x: number,
        p1y: number,
        p2x: number,
        p2y: number,
        p3x: number,
        p3y: number,
    ): ShapeInfo<'Bezier2', [Point2D, Point2D, Point2D]>;

    static cubicBezier(
        p1x: number,
        p1y: number,
        p2x: number,
        p2y: number,
        p3x: number,
        p3y: number,
        p4x: number,
        p4y: number,
    ): ShapeInfo<'Bezier3', [Point2D, Point2D, Point2D, Point2D]>;

    static circle(centerX: number, centerY: number, radius: number): ShapeInfo<'Circle', [Point2D, number]>;

    static ellipse(
        centerX: number,
        centerY: number,
        radiusX: number,
        radiusY: number,
    ): ShapeInfo<'Ellipse', [Point2D, number, number]>;
}
