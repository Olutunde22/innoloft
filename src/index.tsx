import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { store } from "./Redux/store";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<StrictMode>
		<Provider store={store()}>
			<Router>
				<HelmetProvider>
					<App />
				</HelmetProvider>
			</Router>
		</Provider>
	</StrictMode>
);
