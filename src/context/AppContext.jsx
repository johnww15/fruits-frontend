import { createContext, useState } from "react";

export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [purchaseList, setPurchaseList] = useState([]);

  const updatePurchaseList = (newList) => setPurchaseList(newList);

  return (
    <AppContext.Provider value={{ purchaseList, updatePurchaseList }}>
      {children}
    </AppContext.Provider>
  );
};
