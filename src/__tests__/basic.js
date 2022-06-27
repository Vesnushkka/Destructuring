import { swordsman, sortObj} from "../index.js";

test("checkSortOrder", () => {

    const result = sortObj(swordsman);
    expect(result).toBe(
        [
            {key: "name", value: "мечник"}, 
            {key: "level", value: 2}, 
            {key: "attack", value: 80}, 
            {key: "defence", value: 40}, 
            {key: "health", value: 10} 
          ]
    );
});
