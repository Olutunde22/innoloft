/* eslint-disable no-console */
import { Helmet } from "react-helmet-async";
import Layout from "../Layouts";
import { ReactComponent as MainSvg } from "../assets/main.svg";

function Main(): JSX.Element {
	return (
		<Layout>
			<Helmet>
				<title>Main - Innoloft</title>
			</Helmet>
			<MainSvg />
		</Layout>
	);
}

export default Main;
