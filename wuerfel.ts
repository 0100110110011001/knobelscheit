export class Wuerfel {
    werfen(): number {
        return Math.floor(Math.random() * 6) +1;
    }
}