import { isTriplet } from "./pythagoras";

const lang: string = "TypeScript";
const greeting: string = `Hello, ${lang}!`;
console.log(greeting);
const limit: number = 30;
const list: Array<{ a: number, b: number, c: number }> = [];

for (var a: number = 0; a < limit; a++) {
    for (var b: number = 0; b < limit; b++) {
        for (var c: number = 0; c < limit; c++) {
            if (isTriplet(a, b, c)) {
                list.push({ a, b, c });
            }
        }
    }
}

console.log(list);