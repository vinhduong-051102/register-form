import { createContext, useState, useEffect } from "react";
import axios from "axios";
const dataContext = createContext();
const TableDataProvider = ({ children }) => {
	const [title, setTitle] = useState([])
	const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/forms")
		.then((res) => {
      const element = res.data;
      setTitle(Object.keys(element[0]))
			setUsers(res.data)
    })
		.catch((err) => console.log(err))
  }, []);
  const data = {
		title,
		users
	};
  return (
		<dataContext.Provider value={data}>
			{children}
		</dataContext.Provider>
	)
};

export default TableDataProvider;
export { dataContext };
