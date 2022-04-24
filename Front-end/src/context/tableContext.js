import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { appContext } from './AppContext'
const dataContext = createContext();
const TableDataProvider = ({ children }) => {
	const appData = useContext(appContext)
	const { setId } = appData
	const [users, setUsers] = useState([]);
	const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3000/forms")
		.then((res) => {
			setUsers(res.data)
    })
		.catch((err) => console.log(err))
  }, []);
	const handleDelete = async (id) => {
		await axios.delete(`http://localhost:3000/forms/${id}`)
		await axios.get("http://localhost:3000/forms")
		.then((res) => {
			setUsers(res.data)
    })
		.catch((err) => console.log(err))
	}
	const handleEdit = (id) => {
		setIsEdit(true)
		setId(id)
	}
  const data = {
		users,
		isEdit,
		handleEdit,
		handleDelete
	};
  return (
		<dataContext.Provider value={data}>
			{children}
		</dataContext.Provider>
	)
};

export default TableDataProvider;
export { dataContext };
