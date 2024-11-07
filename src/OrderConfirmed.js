import { useSelector, useDispatch } from "react-redux";
import { newOrder } from "./Context";

function OrderConfirmed() {
	const dispatch = useDispatch();

	const cartItems = useSelector((state) => state.add.items);

	const totalOrderPrice = cartItems.reduce(
		(total, item) => total + item.total,
		0
	);

	function handleNewOrder() {
		dispatch(newOrder());
	}

	return (
		<div className="w-full bg-white rounded-t-3xl sm:max-w-xl sm:m-auto p-7">
			<div className="my-3">
				<svg
					width="48"
					height="48"
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z"
						fill="#1EA575"
					/>
					<path
						d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z"
						fill="#1EA575"
					/>
				</svg>
			</div>
			<p className="text-5xl font-bold mt-6 leading-[3.5rem]">
				Order Confirmed
			</p>
			<p className="mt-2 text-lg text-gray-500">We hope you enjoy your food!</p>

			<div className="sm:mx-auto sm:max-w-xl bg-[#fcf3f5] mt-10 p-7 rounded-xl">
				{cartItems.map((item, index) => (
					<div key={index}>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-5">
								<img
									className="object-cover w-16 h-16 rounded-md"
									src={item.img}
									alt={`${item.name} thumbnail`}
								/>
								<div>
									<p className="mb-2 font-semibold">{item.desc}</p>
									<div className="flex items-center gap-4">
										<p className="text-[#ca5531] font-semibold">
											{item.quantity}
										</p>
										<p className="text-gray-500">@ {item.price.toFixed(2)}</p>
									</div>
								</div>
							</div>
							<div>
								<p className="font-semibold">${item.total.toFixed(2)}</p>
							</div>
						</div>
						<hr className="my-4 border-t border-gray-300" />
					</div>
				))}
				<div className="flex items-center justify-between mt-7">
					<p className="text-base text-gray-900">Order Total</p>
					<p className="text-3xl font-bold">${totalOrderPrice.toFixed(2)}</p>
				</div>
			</div>

			{/* New Button Section */}
			<div className="mt-10 sm:mx-auto sm:max-w-xl">
				<button
					onClick={handleNewOrder}
					className="bg-[#c9451d] font-semibold rounded-full duration-300 ease-in-out transition-all transform text-white p-4 w-full text-lg hover:bg-[#a43e1b] hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
				>
					Start New Order
				</button>
			</div>
		</div>
	);
}

export default OrderConfirmed;
