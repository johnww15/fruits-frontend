import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { getHistoryList } from "../utilities/Purchases/purchases-service";
import HistoryList from "../components/HistoryPage/HistoryList";

export default function HistoryPage({ user }) {
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
      <h1>Your past purchases</h1>
      <HistoryList user={user} />
    </>
  );
}
