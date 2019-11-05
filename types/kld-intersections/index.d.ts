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

interface IPoint2D {
    x: number;
    y: number;
}

export class Point2D implements IPoint2D {
    x: number;
    y: number;

    constructor(x: number, y: number);
}

interface FixedLengthArray<T extends any, L extends number> extends Array<T> {
    '0': T;
    length: L;
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

    static path(pathData: string): ShapeInfo<'Path', (ShapeInfo<ShapeNames, any>)[]>;

    /**
     * @param points If array of numbers, an even number of coordinates should be specified (i.e. [x1, y1, x2, y2, ...])
     */
    static polygon(
        ...points: IPoint2D[] | number[]
    ): ShapeInfo<
        'Polygon',
        typeof points extends number[] ? Point2D[] : FixedLengthArray<Point2D, typeof points['length']>
    >;
}
