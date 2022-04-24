import { useContext } from "react";
import Title from "./components/Title";
import TableContent from "./components/TableContent";
import { dataContext } from "../../context/tableContext";
import Edit from "../edit/Edit";
const TableForm = () => {
  const tableData = useContext(dataContext);
  const { isEdit } = tableData;
  const tableView = (
    <table className="table table-hover m-t-53">
      <Title />
      <TableContent />
    </table>
  )
  const editView = <Edit />
  return isEdit ? editView : tableView
};

export default TableForm;
