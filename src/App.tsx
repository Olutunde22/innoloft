import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import { MainPage, ProductPage, ErrorPage } from "./Routes";
import { useGetConfigurationQuery } from "./Redux/api/configurationApiSlice";
import { useAppDispatch } from "./Redux/hooks";
import { setConfiguration } from "./Redux/slices/configuration";
import {
	ExclamationCircleIcon,
	ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

function App(): JSX.Element {
	const dispatch = useAppDispatch();
	const {
		data: configuration,
		isFetching,
		isSuccess,
	} = useGetConfigurationQuery(undefined);

	useEffect(() => {
		if (!isFetching && configuration) {
			dispatch(
				setConfiguration({
					...configuration,
				})
			);
		}
	}, [isFetching, configuration, dispatch]);

	if (isFetching) return <Loading />;

	if (!isFetching && isSuccess)
		return (
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/product">
						<Route index element={<ProductPage />} />
						<Route path="edit" element={<ProductPage />} />
					</Route>
					<Route
						path="*"
						element={
							<ErrorPage
								errorIcon={
									<ExclamationTriangleIcon className="text-yellow-500 h-24 w-24" />
								}
								errorTitle="  Sorry looks like this page doesn't exist"
								errorMessage="But don't worry, you can find plenty of other things on our
							homepage."
								errorNumber="404"
							/>
						}
					/>
				</Routes>
			</Suspense>
		);

	return (
		<ErrorPage
			errorIcon={<ExclamationCircleIcon className="text-red-500 h-24 w-24" />}
			errorTitle="Sorry we couldn't reach our server"
			errorNumber="500"
		/>
	);
}

export default App;
