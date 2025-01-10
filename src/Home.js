import { useDispatch, useSelector } from "react-redux";
import { setExplore, setImageLoaded } from "./Context";

function Home() {
	const dispatch = useDispatch();
	const imageLoaded = useSelector((state) => state.add.imageLoaded);

	return (
		<main className="relative h-screen">
			<img
				src="/images/chocolate.jpeg"
				alt="The best desserts"
				className={`absolute inset-0 object-cover w-full h-full transition-all duration-1000 ease-in-out ${
					imageLoaded ? "blur-0" : "blur-2xl"
				}`}
				loading="lazy"
				placeholder="blur"
				quality={80}
				onLoad={() => dispatch(setImageLoaded())} // Set the state to remove blur when loaded
			/>

			<div className="relative z-10 flex flex-col items-center h-full text-center pt-60 sm:pt-48">
				<h1 className="mb-16 text-5xl font-normal tracking-tight sm:text-7xl text-primary-300">
					LeDesserts de Paris
				</h1>
				<button
					onClick={() => dispatch(setExplore())}
					className="px-5 py-4 font-semibold transition-all sm:px-8 sm:py-6 sm:text-lg bg-accent-500 text-primary-800 hover:bg-accent-600"
				>
					Explore Sweetness
				</button>
			</div>
		</main>
	);
}

export default Home;
