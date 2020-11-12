import { MathService } from "./mathService.ts";

const mathService = new MathService();
const numbers: number[] = [];
Deno.args.forEach((number) => numbers.push(parseInt(number, 10)));

console.log(`Result: ${mathService.sum(numbers)}`);
