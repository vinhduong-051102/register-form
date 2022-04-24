import { useContext } from "react";
import { dataContext } from '../../../context/tableContext'
const TableContent = () => {
	const data = useContext(dataContext)
	const { users, handleEdit, handleDelete } = data
  return (
		<tbody>
			{users.map((user, index) => {
				return (
					<tr key={index} >
						<td>{index + 1}</td>
						<td>{`${user.firstName} ${user.lastName}`}</td>
						<td>{user.userName}</td>
						<td>{user.gender}</td>
						<td>{user.birthDate}</td>
						<td>{user.email}</td>
						<td>{user.password}</td>
						<td>
							<button
								type="button" 
								className="btn btn-primary" 
								onClick={() => handleEdit(user.id)}>
								Edit
							</button>
							<button
								type="button" 
								className="btn btn-danger" 
								onClick={() => handleDelete(user.id)}>
								Delete
							</button>
						</td>
					</tr>
				)
			})}
		</tbody>
	)
};

export default TableContent;
