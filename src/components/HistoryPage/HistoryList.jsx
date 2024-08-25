import HistoryItem from "./HistoryItem";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { Container, Grid } from "@mui/material";

export default function HistoryList() {
  const { historyList } = useContext(AppContext);
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {historyList.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <HistoryItem key={item._id} item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
