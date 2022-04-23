import TableDataProvider from "../../../context/tableContext";
import TableForm from "./TableForm";

const Table = () => {
  return (
    <TableDataProvider>
      <TableForm />
    </TableDataProvider>
  );
};

export default Table
