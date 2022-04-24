
const Title = () => {
	const title = ['No', 'Full name', 'User name', 'Gender', 'Birth date', 'Email', 'Password', 'Action']
  return (
		<thead>
			<tr>
				{title.map((title, index) => <th key={index}>{title}</th>)}
			</tr>
		</thead>
	)
};

export default Title;
