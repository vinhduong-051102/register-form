import { EditDataProvider } from "../../context/editContext";
import EditForm from "./EditForm"; 

const Edit = () => {
  return (
    <EditDataProvider>
      <EditForm />
    </EditDataProvider>
  )
}

export default Edit