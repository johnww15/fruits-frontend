import { LineChart } from "@mui/x-charts";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { getPurchaseListForInventoryItem } from "../utilities/Purchases/purchases-service";

export default function AnalyticsPage() {
  const { inventoryList } = useContext(AppContext);
  const [selectedInventoryItem, setSelectedInventoryItem] = useState("");
  const [chartXData, setChartXData] = useState([]); // Days of the month
  const [chartYData, setChartYData] = useState([]); // Quantities

  const fetchPurchaseListForInventoryItem = async (itemId) => {
    const chartDataResponse = await getPurchaseListForInventoryItem(itemId);

    // Consolidate purchases by day of the month
    const purchaseMap = chartDataResponse.reduce((acc, purchase) => {
      const purchaseDay = new Date(purchase.createdAt).getDate(); // Get the day of the month
      if (!acc[purchaseDay]) {
        acc[purchaseDay] = 0;
      }
      acc[purchaseDay] += purchase.quantity; // Sum quantities for the same day
      return acc;
    }, {});

    // Extract and map consolidated data
    const days = Object.keys(purchaseMap).map(Number); // Array of unique days
    const quantities = Object.values(purchaseMap); // Array of summed quantities

    setChartXData(days);
    setChartYData(quantities);
  };

  const handleChange = (event) => {
    const selectedItem = event.target.value;
    setSelectedInventoryItem(selectedItem);
    fetchPurchaseListForInventoryItem(selectedItem);
  };

  return (
    <>
      <h1>Your analytics</h1>
      <FormControl fullWidth>
        <InputLabel id="inventory-select-label">
          Select Inventory Item
        </InputLabel>
        <Select
          labelId="inventory-select-label"
          value={selectedInventoryItem}
          onChange={handleChange}
        >
          {inventoryList.map((item) => (
            <MenuItem key={item._id} value={item._id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <LineChart
        xAxis={[
          {
            data: chartXData,
            type: "linear",
            min: 1,
            max: 31,
            step: 1, // Show only whole numbers
          },
        ]}
        series={[
          {
            data: chartYData,
          },
        ]}
        width={500}
        height={300}
      />
    </>
  );
}
