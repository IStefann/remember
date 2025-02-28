// WRITE EXAMPLE NOTES AND CATEGORIES

import { makeCategory, makeTask, categories } from "./maker.js";

function example(){
makeCategory("Misc");
makeCategory("Shopping");
makeCategory("Work");
makeTask("Shopping", `Remember to buy: 
- Toilet paper, VERY IMPORTANT, tomorrow's a party night. Don't forget
- Bread
- Beer`, "1/1/25", "3/1/25", 3, categories[1].name, 0);
makeTask("Work", "Finish project proposal and send it to the team", "20/2/25", "27/2/25", 2, categories[2].name, 0);
makeTask("Walk", "Take doge out for a walk in the park", "25/2/25", "25/2/25", 1, categories[0].name, 0);
}

export {example}