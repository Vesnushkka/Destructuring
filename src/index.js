export const swordsman = {
  name: "мечник",
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};
export const sortOrder = ["name", "level"];
  
export function sortObj(obj, firstPart) {
  const secondPart = [];
  
  for (const prop in obj) {
    if (!firstPart.includes(prop)) {
          secondPart.push(prop);
    }
  }
  secondPart.sort();
  
  return [...firstPart, ...secondPart].map((key) => ({ key: key, value: obj[key] }));;
}

sortObj(swordsman, sortOrder)