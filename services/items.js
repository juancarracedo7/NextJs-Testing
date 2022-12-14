export async function getItems() {
  const res = await fetch("http://localhost:3000/api/items");
  const items = await res.json();
  console.log(items)
  return items;
}

export async function getLatestItems(){
    const items = await getItems();

    return items.slice(0, 3);
}