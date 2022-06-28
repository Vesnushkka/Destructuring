import { bowman, showCard} from "../index.js";

test("checkArray", () => {

    const result = showCard(bowman);
    expect(result).toEqual(
        [
            {id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон'},
            {id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно'}
        ]
    );
});
