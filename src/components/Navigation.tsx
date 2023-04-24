import { Link } from "react-router-dom";
import { HomeIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

function Navigation(): JSX.Element {
	return (
		<nav
			className="fixed flex-col hidden md:flex pt-24
        transition-all duration-300 min-h-screen border-y-0
        max-h-screen overflow-y-auto w-[150px]"
		>
			<ol className="items-left list-none space-y-4">
				<li className="flex">
					<HomeIcon className="h-6 w-6 mr-4" /> <Link to="/">Home</Link>
				</li>
				<li className="flex">
					<ShoppingCartIcon className="h-6 w-6 mr-4" />
					<Link to="/product">Product</Link>
				</li>
			</ol>
		</nav>
	);
}

export default Navigation;
