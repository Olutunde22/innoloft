import Navigation from "../components/Navigation";
import Header from "../components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="no-scroll">
			<Header />
			<div className="flex md:max-w-[90vw] xl:max-w-[80vw] px-2 mx-auto md:space-x-4">
				<Navigation />
				<section className="w-full pt-24 md:pl-44">{children}</section>
			</div>
		</main>
	);
}
