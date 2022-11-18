import { createContext, useState, useContext} from "react";


const AppContext = createContext({
  isOpen: false,
  items: [],
  openCart: () => {},
  closeCart: () => {},
  addItem: (item) => {},
  getNumberOfItems: () => {},
});

export default function StateWrapper({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  const handleOpenCart = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAddItem = (item) => {
    const newItems = [...items];
    const find = newItems.find((i) => i.id === item.id);
    if (find) {
      find.qty++; // si lo encuentra, le suma 1 a la cantidad
    } else {
      item.qty = 1; // si no lo encuentra lo pushea con cantidad 1
      newItems.push(item);
    }
    setItems([...newItems]);
  };

  const handleGetNumberOfItems = () => {
    return items.reduce((acc, item) => acc + item.qty, 0);
  };

  return (
    <AppContext.Provider
      value={{
        isOpen,
        items,
        openCart: handleOpenCart,
        closeCart: handleClose,
        addItem: handleAddItem,
        getNumberOfItems: handleGetNumberOfItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}