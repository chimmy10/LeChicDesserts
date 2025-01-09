// import CartFull from "./CartFull";
// import Cart from "./Cart";
// import { useDispatch, useSelector } from "react-redux";
// import { adding, reducing } from "./Context";

// function Desserts() {
// 	const cartItems = useSelector((state) => state.add.items);

// 	return (
// 		<div className="xl:grid xl:grid-cols-3">
// 			{/* Dessert Cards section */}
// 			<div className="px-7 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-7 xl:col-span-2">
// 				<DessertCard
// 					imgSrc="/images/image-waffle-mobile.jpg"
// 					altText="Waffle with Berries"
// 					name="Waffle"
// 					description="Waffle with Berries"
// 					price="6.50"
// 					clicked={cartItems.some((item) => item.name === "Waffle")}
// 				/>
// 				<DessertCard
// 					imgSrc="/images/image-creme-brulee-mobile.jpg"
// 					altText="Creme Brulee"
// 					name="Creme Brulee"
// 					description="Vanilla Bean Creme Brulee"
// 					price="7.00"
// 					clicked={cartItems.some((item) => item.name === "Creme Brulee")}
// 				/>
// 				<DessertCard
// 					imgSrc="/images/image-macaron-mobile.jpg"
// 					altText="Macaron"
// 					name="Macaron"
// 					description="Macaron Mix of Five"
// 					price="8.00"
// 					clicked={cartItems.some((item) => item.name === "Macaron")}
// 				/>
// 				<DessertCard
// 					imgSrc="/images/image-tiramisu-mobile.jpg"
// 					altText="Tiramisu"
// 					name="Tiramisu"
// 					description="Classic Tiramisu"
// 					price="5.50"
// 					clicked={cartItems.some((item) => item.name === "Tiramisu")}
// 				/>
// 				<DessertCard
// 					imgSrc="/images/image-baklava-mobile.jpg"
// 					altText="Baklava"
// 					name="Baklava"
// 					description="Pistachio Baklava"
// 					price="8.50"
// 					clicked={cartItems.some((item) => item.name === "Baklava")}
// 				/>
// 				<DessertCard
// 					imgSrc="/images/image-meringue-mobile.jpg"
// 					altText="Meringue"
// 					description="Lemon Meringue Pie"
// 					name="Pie"
// 					price="5.00"
// 					clicked={cartItems.some((item) => item.name === "Pie")}
// 				/>
// 				<DessertCard
// 					imgSrc="/images/image-cake-mobile.jpg"
// 					altText="Cake"
// 					description="Red Velvet Cake"
// 					name="Cake"
// 					price="4.50"
// 					clicked={cartItems.some((item) => item.name === "Cake")}
// 				/>
// 				<DessertCard
// 					imgSrc="/images/image-brownie-mobile.jpg"
// 					altText="Brownie"
// 					description="Salted Caramel Brownie"
// 					name="Brownie"
// 					price="5.50"
// 					clicked={cartItems.some((item) => item.name === "Brownie")}
// 				/>
// 				<DessertCard
// 					imgSrc="/images/image-panna-cotta-mobile.jpg"
// 					altText="Panna Cotta"
// 					description="Vanilla Panna Cotta"
// 					name="Panna Cotta"
// 					price="4.50"
// 					clicked={cartItems.some((item) => item.name === "Panna Cotta")}
// 				/>
// 			</div>

// 			{/* Cart section */}
// 			<div className="mx-7 xl:col-span-1 xl:col-start-3">
// 				{cartItems.length > 0 ? <CartFull /> : <Cart />}
// 			</div>
// 		</div>
// 	);
// }

// function DessertCard({ imgSrc, altText, name, clicked, description, price }) {
// 	const dispatch = useDispatch();
// 	const cartItems = useSelector((state) => state.add.items);
// 	const itemQuantity = cartItems
// 		.filter((item) => item.name === name)
// 		.reduce((acc, item) => acc + item.quantity, 0);

// 	function handleAdd() {
// 		dispatch(
// 			adding({
// 				name,
// 				quantity: 1, // Initial quantity is 1
// 				price: parseFloat(price), // Ensure price is a number
// 				total: parseFloat(price), // Total is calculated as price * quantity
// 				clicked: true,
// 				img: imgSrc,
// 				desc: description,
// 			})
// 		);
// 	}

// 	function handleRemove() {
// 		dispatch(reducing(name));
// 	}

// 	return (
// 		<div className="mb-7">
// 			<div>
// 				<div className="flex flex-col items-center justify-center">
// 					<img
// 						className={`object-cover transition-all duration-300 ease-in-out w-full h-60 rounded-xl ${
// 							clicked
// 								? "border-4 border-[#c9451d] shadow-lg"
// 								: "border-4 border-transparent"
// 						}`}
// 						src={imgSrc}
// 						alt={altText}
// 					/>

// 					{!clicked ? (
// 						<button
// 							onClick={handleAdd}
// 							className="flex items-center justify-center py-3 mb-4 space-x-3 text-black transition duration-200 transform bg-white border-2 border-gray-400 rounded-full shadow-sm px-8 -m-7 hover:bg-orange-600 focus:outline-none focus:ring-2 hover:shadow-lg hover:-translate-y-0.5 focus:ring-orange-500 focus:ring-offset-2 ease-in-out"
// 						>
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								width="21"
// 								height="20"
// 								fill="none"
// 								viewBox="0 0 21 20"
// 								className="text-orange-600 transition duration-200 group-hover:text-white"
// 							>
// 								<g fill="#C73B0F" clipPath="url(#a)">
// 									<path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
// 									<path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
// 								</g>
// 								<defs>
// 									<clipPath id="a">
// 										<path fill="#fff" d="M.333 0h20v20h-20z" />
// 									</clipPath>
// 								</defs>
// 							</svg>
// 							<p className="text-base font-medium">Add to Cart</p>
// 						</button>
// 					) : (
// 						<div className="flex items-center justify-center px-4 py-3 mb-4 space-x-2 text-black bg-[#c9451d] border-2 border-[#c9451d] rounded-full -m-7">
// 							<div className="flex items-center gap-8 ">
// 								<button onClick={handleRemove}>
// 									<svg
// 										xmlns="http://www.w3.org/2000/svg"
// 										fill="none"
// 										viewBox="0 0 24 24"
// 										strokeWidth={1.5}
// 										stroke="white"
// 										className="transition duration-200 ease-in-out transform size-6 hover:stroke-slate-900"
// 									>
// 										<path
// 											strokeLinecap="round"
// 											strokeLinejoin="round"
// 											d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
// 										/>
// 									</svg>
// 								</button>
// 								<p className="text-white">{itemQuantity}</p>
// 								<button onClick={handleAdd}>
// 									<svg
// 										xmlns="http://www.w3.org/2000/svg"
// 										fill="none"
// 										viewBox="0 0 24 24"
// 										strokeWidth={1.5}
// 										stroke="white"
// 										className="transition duration-200 ease-in-out transform size-6 hover:stroke-slate-900 hover:scale-110"
// 									>
// 										<path
// 											strokeLinecap="round"
// 											strokeLinejoin="round"
// 											d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
// 										/>
// 									</svg>
// 								</button>
// 							</div>
// 						</div>
// 					)}
// 				</div>
// 				<p className="text-gray-500">{name}</p>
// 				<p className="text-lg font-semibold">{description}</p>
// 				<p className="text-[#d06c4e] font-bold text-xl">${price}</p>
// 			</div>
// 		</div>
// 	);
// }

// export default Desserts;
