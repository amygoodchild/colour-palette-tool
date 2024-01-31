
export function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export function clampNumber(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

export function floorAll(obj){
  let newObj = {};
  for (let key in obj){
    newObj[key] = Math.floor(obj[key]);
  }
  return newObj;
}