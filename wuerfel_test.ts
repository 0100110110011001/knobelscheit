import { assertEquals } from "@std/assert";
import { Wuerfel } from "./wuerfel.ts";

Deno.test("wuerfel kann erstellt werden", () => {
    const wuerfel = new Wuerfel();
});

Deno.test("werfen gibt Zahl zwischen 1 und 6 zurueck", () => {
    const wuerfel = new Wuerfel();
    const ergebnis = wuerfel.werfen();
    assertEquals(ergebnis >= 1, true);
    assertEquals(ergebnis <= 6, true);
});