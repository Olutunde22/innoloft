/* eslint-disable no-console */
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Error({
	errorIcon,
	errorTitle,
	errorMessage,
	errorNumber,
}: {
	errorNumber: string;
	errorMessage?: string;
	errorTitle: string;
	errorIcon: any;
}): JSX.Element {
	return (
		<>
			<Helmet>
				<title>Error - Innoloft</title>
			</Helmet>
			<div className="h-screen w-screen bg-gray-100 flex items-center">
				<div
					className="w-full flex flex-col-reverse
                     items-center 
            justify-center px-5 text-gray-700"
				>
					<div className="max-w-md text-center">
						<h1 className="text-5xl font-dark font-bold">{errorNumber}</h1>
						<h2
							className="text-2xl md:text-3xl font-light mt-2 
                    leading-normal"
						>
							{errorTitle}
						</h2>
						<p className="mb-8 mt-2">{errorMessage}</p>

						<Link
							to="/"
							className="px-4 inline py-2 text-sm font-medium 
                    leading-5 shadow text-white transition-colors duration-150 
                    border border-transparent rounded-lg focus:outline-none
                     focus:shadow-outline-blue bg-blue-600 
                     active:bg-blue-600
                      hover:bg-blue-700"
						>
							Back to homepage
						</Link>
					</div>
					<div className="max-w-lg mb-5">{errorIcon}</div>
				</div>
			</div>
		</>
	);
}

export default Error;
