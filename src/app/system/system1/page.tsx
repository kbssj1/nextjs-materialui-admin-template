import MuiDataGrid from "./datagrid";
import { getTransactionData } from "@/app/service/service";

export default async function Page() {
  const revenue = await getTransactionData();

  return (
    <MuiDataGrid data={revenue} />
  );
}