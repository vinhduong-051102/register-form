
import { useContext } from "react";
import { dataContext } from '../../../context/tableContext'

const Title = () => {
  const data = useContext(dataContext)
  const { title } = data
	const newTitle = [...title, 'action']
  return (
		<thead>
			<tr>
				{newTitle.map((title, index) => <th key={index}>{title}</th>)}
			</tr>
		</thead>
	)
};

export default Title;
