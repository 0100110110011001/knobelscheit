export class Knobelscheit {
    offeneZahlen: number[];

    constructor() {
        this.offeneZahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    umdrehen(zahlen: number[]) {
        this.offeneZahlen = this.offeneZahlen.filter((zahl) => !zahlen.includes(zahl));
    }
}