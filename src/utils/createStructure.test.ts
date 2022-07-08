import { createStructure } from "./createStructure";

const data = [
    {
        from_tiploc: "ABCWM",
        to_tiploc: "FERNHIL",
        distance: 483
    },
    {
        from_tiploc: "ABDARE",
        to_tiploc: "CMBH",
        distance: 2454
    },
    {
        from_tiploc: "ABDO",
        to_tiploc: "BISLND",
        distance: 4345
    },
    {
        from_tiploc: "ABDO",
        to_tiploc: "DALGETY",
        distance: 4486
    }]


test("greet returns a string, greeting the passed name", () => {
  expect(createStructure(data)).toBe({
    ABCWM: { FERNHIL: 483 },
    ABDARE: { CMBH: 2454 },
    ABDO: { BISLND: 4345, DALGETY: 4486 }
  });
});