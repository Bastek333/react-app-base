import React, { useState, useEffect } from "react";
import "./List.css";

interface User {
	id: number;
	username: string;
	email: string;
}

const List: React.FC = () => {
	const [data, setData] = useState<User[]>([]);
	const [input, setInput] = useState<string>("");

	useEffect(() => {
		const getData = async () => {
			await fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
				if (res.ok) {
					res.json().then((data) => {
						setData(data);
					});
				}
			});
		};

		getData();
	}, []);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

	return (
		<>
			<input onChange={handleChange}></input>
			<ul>
				{data
					.filter((item) => (input ? item.username.includes(input) : true))
					.map((item) => (
						<li key={item?.id}>{`${item?.username} ${item.email}`}</li>
					))}
			</ul>
		</>
	);
};

export default List;
