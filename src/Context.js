import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	confirmOrder: false,
	explore: false,
	imageLoaded: false,
};

const shopCart = createSlice({
	name: "Add",
	initialState,
	reducers: {
		adding(state, action) {
			const newItem = action.payload;

			// Check if the item is already in the cart
			const existingItem = state.items.find(
				(item) => item.name === newItem.name
			);

			if (existingItem) {
				// If the item already exists, increase the quantity
				existingItem.quantity += 1;
				existingItem.total = existingItem.quantity * existingItem.price;
			} else {
				// Otherwise, add the new item
				state.items.push({ ...newItem, clicked: true });
			}
		},
		reducing(state, action) {
			const itemName = action.payload;

			// Find the item to reduce
			const existingItem = state.items.find((item) => item.name === itemName);

			if (existingItem) {
				// Reduce the quantity if it's greater than 1
				if (existingItem.quantity > 1) {
					existingItem.quantity -= 1;
					existingItem.total = existingItem.quantity * existingItem.price;
				} else {
					// If quantity is 1, remove the item from the cart
					state.items = state.items.filter((item) => item.name !== itemName);
				}
			}
		},
		remove(state, action) {
			const itemName = action.payload;
			state.items = state.items.filter((item) => item.name !== itemName);
		},
		confirm(state) {
			state.confirmOrder = true;
		},
		newOrder(state) {
			state.confirmOrder = false;
			state.items = [];
		},
		setExplore(state) {
			state.explore = true;
		},
		setImageLoaded(state) {
			state.imageLoaded = true;
		},
	},
});

export const {
	adding,
	reducing,
	remove,
	confirm,
	newOrder,
	setExplore,
	setImageLoaded,
} = shopCart.actions;

export default shopCart.reducer;
