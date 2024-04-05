import {rank, serch } from "./src/index.ts";

// serch({of: ["title", "story", "ncode","user"], lim: 10, order: "new", word: "異世界"}).then((result) => {
//     console.log(result);
// });
rank({rtype: "20130501-m"}).then((result) => {
    console.log(result);
})