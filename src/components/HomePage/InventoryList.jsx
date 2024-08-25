import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import InventoryItem from "./InventoryItem";
import ShopItem from "./ShopItem";
import { Container, Grid, Typography } from "@mui/material";

export default function InventoryList({ fetchInventoryList, user }) {
  const [updateInventoryOpen, setUpdateInventoryOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [createPurchaseOpen, setCreatePurchaseOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [deletedItem, setDeletedItem] = useState({});
  const [purchasedItem, setPurchasedItem] = useState({});
  const { inventoryList } = useContext(AppContext);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {user.isOwner ? "Your inventory" : "Available stock"}
      </Typography>
      <Grid container spacing={3}>
        {user.isOwner
          ? inventoryList.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <InventoryItem
                  item={item}
                  user={user}
                  fetchInventoryList={fetchInventoryList}
                  updateInventoryOpen={updateInventoryOpen}
                  setUpdateInventoryOpen={setUpdateInventoryOpen}
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                  deletedItem={deletedItem}
                  setDeletedItem={setDeletedItem}
                  deleteOpen={deleteOpen}
                  setDeleteOpen={setDeleteOpen}
                />
              </Grid>
            ))
          : inventoryList.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <ShopItem
                  item={item}
                  createPurchaseOpen={createPurchaseOpen}
                  setCreatePurchaseOpen={setCreatePurchaseOpen}
                  purchasedItem={purchasedItem}
                  setPurchasedItem={setPurchasedItem}
                />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
}
