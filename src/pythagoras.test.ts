import { isTriplet } from "./pythagoras";

test("isTriple (3,4,5)", () => {
    expect(isTriplet(3, 4, 5)).toBe(true);
});

test("isTriple (3,4,6)", () => {
    expect(isTriplet(3, 4, 6)).toBe(false);
});