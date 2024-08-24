import HistoryItem from "./HistoryItem";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export default function HistoryList({ user }) {
  const { historyList } = useContext(AppContext);
  return (
    <>
      {historyList.map((item) => (
        <HistoryItem key={item.id} item={item} user={user} />
      ))}
    </>
  );
}
