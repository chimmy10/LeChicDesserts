import { useSelector, useDispatch } from "react-redux";
import { remove, confirm } from "./Context";

function CartFull() {
	const dispatch = useDispatch();

	const cartItems = useSelector((state) => state.add.items);

	const orderTotal = cartItems.reduce((total, item) => total + item.total, 0);
	const totalQuantity = cartItems.reduce(
		(total, item) => total + item.quantity,
		0
	); // Calculate total quantity

	function handleRemove(itemName) {
		dispatch(remove(itemName)); // Dispatch the remove action with the item's name
	}

	function handleConfirmOrder() {
		dispatch(confirm());
	}

	return (
		<div className="bg-white sm:mx-auto sm:max-w-lg p-7 rounded-xl">
			<p className="text-[#ca5531] font-bold text-3xl mb-7">
				Your Cart ({totalQuantity})
			</p>
			{cartItems.map((item, index) => (
				<div key={index}>
					<div className="flex items-center justify-between">
						<div className="font-semibold">
							<p className="text-base">{item.desc}</p>
							<div className="flex gap-5 my-2">
								<p className="text-[#ca5531] font-semibold">{item.quantity}x</p>
								<div className="flex gap-3">
									<p className="text-gray-400">@${item.price.toFixed(2)}</p>
									<p className="text-gray-600">${item.total.toFixed(2)}</p>
								</div>
							</div>
						</div>
						<button onClick={() => handleRemove(item.name)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="#808080"
								className="transition duration-200 ease-in-out transform size-6 hover:stroke-slate-900"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
						</button>
					</div>
					<hr className="my-4 border-t border-gray-300" />
				</div>
			))}
			<div className="flex items-center justify-between mt-7">
				<p className="text-base text-gray-900">Order Total</p>
				<p className="text-3xl font-bold">${orderTotal.toFixed(2)}</p>
			</div>

			<div className="flex p-4 gap-1 my-7 items-center justify-center rounded-lg bg-[#fcf3f5]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="21"
					height="20"
					fill="none"
					viewBox="0 0 21 20"
				>
					<path
						fill="#1EA575"
						d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
					/>
					<path
						fill="#1EA575"
						d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
					/>
				</svg>
				<p className="text-base font-semibold text-center text-gray-600">
					This is a <span className="text-black">carbon-neutral</span> delivery
				</p>
			</div>

			<button
				onClick={handleConfirmOrder}
				className="bg-[#c9451d] text-white font-semibold text-lg py-4 px-6 w-full rounded-full transition-all duration-300 ease-in-out transform hover:bg-[#a43e1b] hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
			>
				Confirm Order
			</button>
		</div>
	);
}

export default CartFull;
