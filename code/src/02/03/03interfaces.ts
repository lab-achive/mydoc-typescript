interface LabeledValue {
  label: string
}

function printLabel(labelObj: LabeledValue) {
  console.log(labelObj.label);
}

let myObj = {
  size: 10,
  label: "Size 10 Object"
};

printLabel(myObj);

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
      newSquare.color = config.color;
  }
  if (config.width) {
      newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let x = {
  width: 1,
  a: 100
}

let squareOptions = { x: 1 };
let mySquare = createSquare(squareOptions);
