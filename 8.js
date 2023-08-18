let fruits = new Map();
fruits.set("apple", "green");
fruits.set("strawberry", "red");
fruits.set("blueberry", "blue");
for (let elem of fruits.keys()){
    console.log( `Ключ - ${elem}, значение - ${fruits.get(elem)}`);
}