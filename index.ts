type Goods = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const goods: Goods[] = [
  { id: 1, name: "Item 1", price: 10, quantity: 50 },
  { id: 2, name: "Item 2", price: 15, quantity: 30 },
  { id: 3, name: "Item 3", price: 8, quantity: 70 },
  { id: 4, name: "Item 4", price: 25, quantity: 20 },
  { id: 5, name: "Item 5", price: 12, quantity: 40 },
];

const newGood: Goods = { id: 6, name: "Item 6", price: 18, quantity: 60 };

export const createGood = (goodsList: Goods[], newGood: Goods): Goods => {
  newGood.id = goodsList.length + 1;
  goodsList.push(newGood);
  return newGood;
};

export const viewAllGoods = (goodsList: Goods[]): Goods[] => {
  return goodsList;
};

export const viewOneGood = (goodsList: Goods[], id: number): Goods => {
  let getGood = goodsList.find((el) => el.id === id);
  if (!getGood) throw new Error("No good found with this ID");
  return getGood;
};

export const updateOneGood = (goodsList: Goods[], id: number): Goods => {
  let getGood = goodsList.find((el) => el.id === id);
  if (!getGood) throw new Error("No good found with this ID");
  return getGood;
};

export const deleteGood = (goodsList: Goods[], id: number): boolean => {
  const initialLength = goodsList.length;
  goodsList = goodsList.filter((good) => good.id !== id);
  return goodsList.length !== initialLength;
};

// Example Usage
console.log("Updated Goods List:", updateOneGood(goods, 2));

console.log("Deleted Goods List:", deleteGood(goods, 2));

createGood(goods, newGood);
console.log(createGood(goods, newGood));
console.log(viewAllGoods(goods));
console.log(viewOneGood(goods, 3));
