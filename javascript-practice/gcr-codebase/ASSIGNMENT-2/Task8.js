
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const totalCartValue = cart.reduce(
    (total, product) => total + product.price,
    0
);

let discountedTotal = 0;

for (const product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    const finalPrice = product.price - (product.price * discount / 100);

    console.log(`${product.item}: ₹${finalPrice}`);
    discountedTotal += finalPrice;
}

if (totalCartValue > 50000) {
    discountedTotal -= discountedTotal * 5 / 100;
}

console.log("Original Cart Total: ₹" + totalCartValue);
console.log("Final Cart Total: ₹" + discountedTotal);
