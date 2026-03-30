import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const ReactQuery = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Example />
			<InvalidateButton />
		</QueryClientProvider>
	);
}

const Example = () => {
	const { isPending, error, data } = useQuery({
		queryKey: ["repoData"],
		queryFn: () =>
			fetch("https://api.github.com/repos/TanStack/query").then((res) =>
				res.json(),
			),
	});

	if (isPending) return "Loading...";

	if (error) return "An error has occurred: " + error.message;

	return (
		<div>
			<h1>{data.name}</h1>
			<p>{data.description}</p>
			<strong>👀 {data.subscribers_count}</strong>{" "}
			<strong>✨ {data.stargazers_count}</strong>{" "}
			<strong>🍴 {data.forks_count}</strong>
		</div>
	);
}

const InvalidateButton: React.FC = () => {
	const handleClick = () => {
		queryClient.invalidateQueries({ queryKey: ["repoData"] });
	};

	return <button onClick={handleClick}>Invalidate</button>;
};

export default ReactQuery;
