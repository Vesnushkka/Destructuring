export const bowman = {
  name: "Лучник",
  type: "Bowman",
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон",
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://...",
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export function showCard({special}) {
  const arr = [];

  for (let i=0; i < special.length; i++) {
    if (!special[i].description) {
      special[i].description = 'Описание недоступно';
    }
    arr.push(special[i]);
  }  
  return arr; 
}
  
showCard(bowman);
