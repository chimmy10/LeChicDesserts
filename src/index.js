import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from react-dom/client
import "./styles.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const container = document.getElementById("root"); // Get the root container
const root = ReactDOM.createRoot(container); // Create a root

// Wrap your App component with React.StrictMode
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
