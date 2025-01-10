import CartFull from "./CartFull";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { adding, reducing } from "./Context";
import { useQuery } from "@tanstack/react-query";
import { getMenu } from "./services/apiMenu";
import Spinner from "./Spinner";

function Desserts() {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.add.items);

	const {
		isLoading,
		data: menu,
		error,
	} = useQuery({
		queryKey: ["menu"],
		queryFn: getMenu,
	});

	if (error) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<p className="text-xl text-red-600">
					Something went wrong. Please try again later.
				</p>
			</div>
		);
	}

	function handleAdd(item) {
		dispatch(
			adding({
				name: item.name,
				quantity: 1, // Initial quantity is 1
				price: parseFloat(item.price), // Ensure price is a number
				total: parseFloat(item.price), // Total is calculated as price * quantity
				clicked: true,
				img: item.image,
				desc: item.description,
			})
		);
	}

	function handleRemove(item) {
		dispatch(reducing(item.name));
	}

	if (isLoading) return <Spinner />;

	return (
		<div className="xl:grid xl:grid-cols-3">
			<div className="px-7 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-7 xl:col-span-2">
				{menu.map((s) => {
					// Calculate the quantity of the current item in the cart
					const itemQuantity = cartItems
						.filter((item) => item.name === s.name)
						.reduce((acc, item) => acc + item.quantity, 0); // Sum the quantities of matching items
					const clicked = cartItems.some(
						(cartItem) => cartItem.name === s.name
					);

					return (
						<div key={s.id} className="flex flex-col mb-7">
							<img
								className={`object-cover transition-all duration-300 ease-in-out w-full h-60 rounded-xl ${
									clicked
										? "border-4 border-[#c9451d] shadow-lg"
										: "border-4 border-transparent"
								}`}
								src={s.image}
								alt="something"
							/>
							<div className="flex flex-col items-center justify-center">
								{!clicked ? (
									<button
										onClick={() => handleAdd(s)} // Add to cart
										className="flex items-center justify-center py-3 mb-4 space-x-3 text-black transition duration-200 transform bg-white border-2 border-gray-400 rounded-full shadow-sm px-8 -m-7 hover:bg-orange-600 focus:outline-none focus:ring-2 hover:shadow-lg hover:-translate-y-0.5 focus:ring-orange-500 focus:ring-offset-2 ease-in-out"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="21"
											height="20"
											fill="none"
											viewBox="0 0 21 20"
											className="text-orange-600 transition duration-200 group-hover:text-white"
										>
											<g fill="#C73B0F" clipPath="url(#a)">
												<path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
												<path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
											</g>
											<defs>
												<clipPath id="a">
													<path fill="#fff" d="M.333 0h20v20h-20z" />
												</clipPath>
											</defs>
										</svg>
										<p className="text-base font-medium">Add to Cart</p>
									</button>
								) : (
									<div className="flex items-center justify-center px-4 py-3 mb-4 space-x-2 text-black bg-[#c9451d] border-2 border-[#c9451d] rounded-full -m-7">
										<div className="flex items-center gap-8 ">
											<button onClick={() => handleRemove(s)}>
												{" "}
												{/* Remove from cart */}
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="white"
													className="transition duration-200 ease-in-out transform size-6 hover:stroke-slate-900"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
													/>
												</svg>
											</button>
											<p className="text-white">{itemQuantity}</p>{" "}
											{/* Display item quantity */}
											<button onClick={() => handleAdd(s)}>
												{" "}
												{/* Add to cart */}
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="white"
													className="transition duration-200 ease-in-out transform size-6 hover:stroke-slate-900 hover:scale-110"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
													/>
												</svg>
											</button>
										</div>
									</div>
								)}
							</div>

							<div className="ml-2">
								<p className="text-gray-500">{s.name}</p>
								<p className="text-lg font-semibold">{s.description}</p>
								<p className="text-[#d06c4e] font-bold text-xl">
									${s.price.toFixed(2)}
								</p>
							</div>
						</div>
					);
				})}
			</div>

			<div className="mx-7 xl:col-span-1 xl:col-start-3">
				{cartItems.length > 0 ? <CartFull /> : <Cart />}
			</div>
		</div>
	);
}

export default Desserts;
