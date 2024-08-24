import { createContext, useState } from "react";

export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [purchaseList, setPurchaseList] = useState([]);
  const [ordersList, setOrdersList] = useState([]);
  const [historyList, setHistoryList] = useState([]);
  const [inventoryList, setInventoryList] = useState([]);

  const updatePurchaseList = (newList) => {
    setPurchaseList(newList);
  };

  const updateOrdersList = (newList) => {
    setOrdersList(newList);
  };

  const updateHistoryList = (newList) => {
    setHistoryList(newList);
  };

  const updateInventoryList = (newList) => {
    setInventoryList(newList);
  };

  return (
    <AppContext.Provider
      value={{
        purchaseList,
        updatePurchaseList,
        ordersList,
        updateOrdersList,
        historyList,
        updateHistoryList,
        inventoryList,
        updateInventoryList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
