import { expect, test } from "vitest";
import { add } from "./main.js";

test("empty string returns 0", () => {
    expect(add("")).toBe(0);
});

test("single number returns the number", () => {
    expect(add("1")).toBe(1);
});

test("two numbers returns their sum", () => {
    expect(add("1,2")).toBe(3);
});

test("handles multiple numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
});

test("handles newlines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
});

test("throws on negative numbers", () => {
    expect(() => add("-1,2")).toThrow("Negatives not allowed: -1");
});

test("throws on multiple negative numbers", () => {
    expect(() => add("-1,-2,3,-4")).toThrow("Negatives not allowed: -1, -2, -4");
});

test("ignores numbers greater than 1000", () => {
    expect(add("1\n2,1002")).toBe(3);
});

