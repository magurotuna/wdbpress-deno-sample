const blob = new Blob(["Hello WEB+DB PRESS!"]); // Blobオブジェクトを生成
const url = URL.createObjectURL(blob); // Blobオブジェクトを指し示すオブジェクトURLを生成する
const resp = await fetch(url); // オブジェクトURLに対してfetch()する
console.log(await resp.text()); // Hello WEB+DB PRESS! と出力される
URL.revokeObjectURL(url); // オブジェクトURLを解放する
