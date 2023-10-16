const store = new Map([
    ["t-shirt", 20],
    ["Jeans", 30],
    ["Socks", 10],
    ["Underwear", 50]
]);

//store.set("hat", 45);
//store.delete("hat");
console.log(store.has("hat"));
store.forEach((value, key) => console.log(`${key} $${value}`));

