import validator from "validator";

console.log(validator.isEmail("45@qq.com"));
export const isAdult = age => {
  return age > 18;
};
s
export const canDrink = age => {
  return age > 21;
};
