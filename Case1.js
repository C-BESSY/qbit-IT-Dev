var fruits = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
];
// buat fungsi yang menampilkan buah apa saja yang dimiliki andi? (fruitName)
var fruitNames = [];
var _loop_1 = function (fruit) {
    if (fruitNames.filter(function (name) { return name.toLowerCase() === fruit.fruitName.toLowerCase(); }).length > 0)
        return "continue";
    fruitNames.push(fruit.fruitName);
};
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    _loop_1(fruit);
}
console.log('No.1');
console.log(fruitNames);
var types = [];
var _loop_2 = function (fruit) {
    if (!types.some(function (type) { return type.fruitType === fruit.fruitType; })) {
        var filteredFruits = fruits.filter(function (f) { return f.fruitType === fruit.fruitType; });
        types.push({
            fruitType: fruit.fruitType,
            fruitName: filteredFruits.map(function (f) { return f.fruitName; }),
            fruitStock: filteredFruits.map(function (f) { return f.stock; }),
        });
    }
};
for (var _a = 0, fruits_2 = fruits; _a < fruits_2.length; _a++) {
    var fruit = fruits_2[_a];
    _loop_2(fruit);
}
console.log('No.2');
console.log("jumlah wadah : ".concat(types.length));
types.forEach(function (type, index) {
    console.log("Wadah ".concat(type.fruitType, ", isinya buah: ").concat(type.fruitName.join(', ')));
});
// berapa total stock buah yang ada di masing-masing wadah?
console.log('No.3');
console.log(types.map(function (type) { return type.fruitStock.reduce(function (a, b) { return a + b; }); }));
