import { assertEquals } from "@std/assert/equals";
import { Knobelscheit } from "./knobelscheit.ts";

Deno.test("Spiel startet mit 9 aufgedeckten Zahlen",() => {
    const spiel = new Knobelscheit();
    assertEquals(spiel.offeneZahlen, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

Deno.test("Zahl umdrehen entfernt sie aus offenen Zahlen",() => {
    const spiel = new Knobelscheit();
    spiel.umdrehen([3]);
    assertEquals(spiel.offeneZahlen, [1, 2, 4, 5 ,6 ,7 ,8 ,9]);
});