console.log("-----------");
console.log("数字类型");
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b11;
let octal: number = 0o744;

console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

console.log("-----------");
console.log("枚举");

enum Color {
  Red = 1,
  绿色 = 10,
  蓝色,
  白色 = 11
}

console.log(Color.绿色);
console.log(Color.蓝色);
console.log(Color[11]);

console.log("-----------");
console.log("any");

let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

console.log("-----------");
console.log("void");

let unusable: void = undefined;
unusable = undefined;

console.log("-----------");
console.log("null and undefined");

let a: string | null | undefined;
a = "a string";
a = null;
a = undefined;

console.log("-----------");
console.log("never");

let na: never;
let nx: any;
// na = nx;
