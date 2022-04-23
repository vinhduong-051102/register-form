import axios from "axios";
import { useContext } from "react";
import { dataContext } from '../../../../context/tableContext'

const Title = () => {
  const data = useContext(dataContext)
  const { title } = data
  return (
		<thead>
			<tr>
				{title.map((title, index) => <th key={index}>{title}</th>)}
			</tr>
		</thead>
	)
};

export default Title;
