export class MathService {
  sum(numbers: number[]) {
    return numbers.reduce(
      (value, number) => Number.isInteger(number) ? value + number : value,
      0,
    );
  }
}
