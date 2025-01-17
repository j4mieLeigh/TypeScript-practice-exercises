function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedStringAges = combine(30, 26, "as-number");

console.log(combinedAges);

const combinedNames = combine("max", "anna", "as-text");

console.log(combinedNames);
