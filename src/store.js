import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./Context";

export const store = configureStore({
	reducer: {
		add: addReducer,
	},
});
