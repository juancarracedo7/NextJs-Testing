import { getItems } from "../services/items";

export async function getIds(){

    const items = await getItems();

    // obtengo los ids de los items
    const ids = items.map((item) => {
        return {
            params: {
                id: item.id.toString()
            }
        }
    })

    return ids
}

export async function getItemsData(id) {
    const items = await getItems()

    const product = items.find((item) => item.id === id)

    return {
        id: id,
        data: product
    }
}