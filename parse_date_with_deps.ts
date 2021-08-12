import { parse } from "./deps.ts"; // stdからの直接インポートではなく、deps.tsを経由してインポートする

const date = parse("2021-08-10", "yyyy-MM-dd"); // 2021年8月10日を表すDateインスタンスが得られる
console.log(date);
