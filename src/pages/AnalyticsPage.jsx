import { LineChart } from "@mui/x-charts";

export default function AnalyticsPage({ user, setUser }) {
  return (
    <>
      <h1>analytics page is here</h1>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={500}
        height={300}
      />
    </>
  );
}
