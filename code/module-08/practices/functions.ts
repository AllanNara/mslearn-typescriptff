/// <reference path="interfaces.ts" />
namespace Functions {
  export function sum(build: Interfaces.Suma): number {
    let result: number = build.a + build.b;
    return result
  }
}