function getLength<T>(arg: T): number {
  if ((arg as any).hasOwnProperty("length")) {
    return arg["length"];
  }
  return 0;
}

console.log(getLength<number>(22));
console.log(getLength("Hello world."));
