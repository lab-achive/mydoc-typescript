// for (let i = 0; i < 10 ; i++) {
//   setTimeout(function() { console.log(i); }, 100 * i);
// }

let input = [1, 2];
let [first, second] = input;
console.log(first);
console.log(second);

let a2: number;
let b2: number;
[a2, b2] = input;
console.log(`${a2} -- ${b2}`);
[a2, b2] = [b2, a2];
console.log(`${a2} -- ${b2}`);

function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}

f([1, 2]);

let tuple: [number, string, boolean] = [7, "hello", true];

let [a3, ...m3] = tuple;
console.log(m3);

let o = {
  a4: "foo",
  b4: 12,
  c4: "bar"
};

// ({ a4, b4 } = { a4: "baz", b4: 101 });

function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject;
}