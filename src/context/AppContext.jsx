import { createContext, useState } from "react";

export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [purchaseList, setPurchaseList] = useState([]);
  const [ordersList, setOrdersList] = useState([]);

  const updatePurchaseList = (newList) => {
    setPurchaseList(newList);
  };

  const updateOrdersList = (newList) => {
    setOrdersList(newList);
  };

  return (
    <AppContext.Provider
      value={{
        purchaseList,
        updatePurchaseList,
        ordersList,
        updateOrdersList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
