import MuiDataGrid from "./datagrid";
import { getTransactionData } from "@/app/service/service";

export default async function Page() {
  const transaction = await getTransactionData();

  return (
    <MuiDataGrid data={transaction} />
  );
}