import { useSelector } from "react-redux";
import Desserts from "./Desserts";
import Header from "./Header";
import OrderConfirmed from "./OrderConfirmed";
import { useEffect } from "react";

function Layout() {
	const some = useSelector((state) => state.add.confirmOrder);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [some]);

	return (
		<div className="flex flex-col min-h-screen font-red-hat bg-[#fcf3f5]">
			<Header />

			{/* Transition from Desserts to OrderConfirmed */}
			<div
				className={`transition-all duration-700 ease-in-out transform ${
					some ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
				}`}
			>
				{!some && <Desserts />}
			</div>

			<div
				className={`transition-all duration-700 ease-in-out transform ${
					some ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
				}`}
			>
				{some && <OrderConfirmed />}
			</div>
		</div>
	);
}

export default Layout;
