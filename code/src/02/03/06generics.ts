function echo<A>(s: A): A {
  return s;
}

console.log(echo<number>(1));
console.log(echo("abc"));

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let xu = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(xu, "a")); // okay
// getProperty(xu, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.