// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "maximilian",
  age: 30,
  hobbies: ["sports", "cooking", "meditation"],
  role: Role.ADMIN,
};
