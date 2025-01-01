export class MetalBar {
  #count: number;
  #value: number;

  constructor(count: number, value: number) {
    this.#count = count;
    this.#value = value;
  }

  get count() {
    return this.#count;
  }

  get value() {
    return this.#value;
  }

  //   Don't really need this, can just use .sort as seen in homework5.ts
  //   // Compare based on value
  //   public int compareTo(MetalBar otherBar) {
  //     return Integer.compare(otherBar.value, value);
  //   }

  toString(): string {
    return `MetalBar(count: ${this.#count}, value: ${this.#value})`;
  }
}

export function printMetalBars(metalBars: MetalBar[]) {
  metalBars.forEach((metalBar) => console.log(metalBar.toString()));
  console.log();
}
