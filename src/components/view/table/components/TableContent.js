import { useContext } from "react";
import { dataContext } from '../../../../context/tableContext'
const TableContent = () => {
	const data = useContext(dataContext)
	const { users, title } = data
  return (
		<tbody>
			{users.map((user, index) => {
				return (
					<tr key={index}>
						{title.map((title, index) => {
							return (
								<td key={index}>{user[title] !== '' ? user[title] : 'null'}</td>
							)
						})}
					</tr>
				)
			})}
		</tbody>
	)
};

export default TableContent;
