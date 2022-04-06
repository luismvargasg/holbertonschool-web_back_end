export default function groceriesList() {
  const list = [['Apples', 10], ['Tomatoes', 10], ['Pasta', 1], ['Rice', 1], ['Banana', 5]];
  const groceries = new Map();
  for (const item of list) grocery.set(item[0], item[1]);
  return groceries;
}
