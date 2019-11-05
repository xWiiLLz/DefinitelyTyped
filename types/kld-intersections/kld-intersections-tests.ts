import { ShapeInfo } from 'kld-intersections';

const lines = [
    ShapeInfo.line({ p1: { x: 10, y: 20 }, p2: { x: 5, y: 10 } }),
    ShapeInfo.line({ p1: [10, 20], p2: [5, 10] }),
    ShapeInfo.line([10, 20, 5, 10]),
    ShapeInfo.line([1, 2, 3, 4]),
    ShapeInfo.line([{ x: 10, y: 20 }, { x: 5, y: 10 }]),
    ShapeInfo.line(10, 20, 5, 10),
    ShapeInfo.line({ x: 10, y: 20 }, { x: 5, y: 10 }),
];
const paths = [ShapeInfo.path('M0,0 L100,100')];
const polygon = ShapeInfo.polygon({ x: 0, y: 2 });
const poly2 = ShapeInfo.polygon(2, 1, 2, 3, 4);
