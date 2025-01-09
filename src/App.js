import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./Layout";
import Home from "./Home";
import { useSelector } from "react-redux";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
		},
	},
});

function App() {
	const explore = useSelector((state) => state.add.explore);

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			{!explore ? <Home /> : <Layout />}
		</QueryClientProvider>
	);
}

export default App;
