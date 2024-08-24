import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { getHistoryList } from "../utilities/Purchases/purchases-service";
import HistoryList from "../components/HistoryPage/historylist";

export default function HistoryPage({ user, setUser }) {
  const { updateHistoryList } = useContext(AppContext);

  const fetchHistoryList = async (user) => {
    const historyListResponse = await getHistoryList(user._id);
    if (historyListResponse.length > 0) {
      updateHistoryList(historyListResponse);
    } else {
      updateHistoryList([]);
    }
  };

  useEffect(() => {
    if (!user?.isOwner) {
      fetchHistoryList(user);
    }
  }, [user]);

  return (
    <>
      <h1>history page is here</h1>
      <HistoryList user={user} />
    </>
  );
}
