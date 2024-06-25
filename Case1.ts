type IFruit = {
    fruitId: number,
    fruitName: string,
    fruitType: 'IMPORT' | 'LOCAL',
    stock: number
}
const fruits: IFruit[] = [
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
]

// buat fungsi yang menampilkan buah apa saja yang dimiliki andi? (fruitName)
const fruitNames: string[] = []
for (const fruit of fruits) {
    if (fruitNames.filter((name) => name.toLowerCase() === fruit.fruitName.toLowerCase()).length > 0) continue;
    fruitNames.push(fruit.fruitName)
}
console.log('No.1')
console.log(fruitNames)


// Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?
type FruitType = {
    fruitType: 'IMPORT' | 'LOCAL',
    fruitName: string[],
    fruitStock: number[]
}

const types: FruitType[] = [];

for (const fruit of fruits) {
    if (!types.some(type => type.fruitType === fruit.fruitType)) {
        const filteredFruits = fruits.filter(f => f.fruitType === fruit.fruitType);
        types.push({
            fruitType: fruit.fruitType,
            fruitName: filteredFruits.map(f => f.fruitName),
            fruitStock: filteredFruits.map(f => f.stock),
        });
    }
}

console.log('No.2');
console.log(`jumlah wadah : ${types.length}`);

types.forEach((type, index) => {
    console.log(`Wadah ${type.fruitType}, isinya buah: ${type.fruitName.join(', ')}`);
});


// berapa total stock buah yang ada di masing-masing wadah?
console.log('No.3')
console.log(types.map(type => type.fruitStock.reduce((a, b) => a + b
)))