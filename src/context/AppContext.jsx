import { createContext, useState } from "react";

export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [purchaseList, setPurchaseList] = useState([]);
  const [orderList, setOrderList] = useState([]);

  const updatePurchaseList = (newList) => {
    setPurchaseList(newList);
  };

  const updateOrderList = (newList) => {
    setOrderList(newList);
  };

  return (
    <AppContext.Provider
      value={{
        purchaseList,
        updatePurchaseList,
        orderList,
        updateOrderList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
