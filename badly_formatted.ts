function hello
(name:string     ):void {console.log(
`Hello, ${name}!`);            }

hello(
'WEB+DB PRESS');

/*
deno fmt 後は以下のようにフォーマットされる

function hello(name: string): void {
    console.log(`Hello, ${name}!`);
}

hello("WEB+DB PRESS");
*/
