import { useEffect, useState } from "react";
import { useAppSelector } from "../Redux/hooks";

export default function Header(): JSX.Element {
	const [top, setTop] = useState(false);

	const mainColor = useAppSelector(
		(state) => state.configurationReducer.mainColor
	);
	const logo = useAppSelector((state) => state.configurationReducer.logo);

	// detect whether user has scrolled the page down by 10px
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	return (
		<header
			style={{
				backgroundColor: mainColor,
			}}
			//the innoloft logo and main color are clashing
			className={`fixed w-full flex md:justify-center md:items-center h-12 z-30 transition duration-300 ease-in-out shadow-lg ${
				!top ? "backdrop-blur-sm " : ""
			}`}
		>
			<nav className="flex justify-between items-center md:w-[85vw] md:mx-auto px-3 md:px-6 lg:px-10 xl:px-14">
				<div>
					<img src={logo} alt="logo" className="h-6" />
				</div>
			</nav>
		</header>
	);
}
