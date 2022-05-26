// object destructuring
const freinds = {
  main: "simer",
  address: "patiala",
  age:15,
  hobby:"cricket",
}
const {main:var1,address:var2,...restProperties}=freinds;
console.log(restProperties);
