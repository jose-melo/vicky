import React, { Suspense } from "react";
import { PageSpin } from "../components/atm.spin/spin";
import { browserCheck } from "../utils/hooks/browser-check";
import ZezaPage from "./zeza";

const HomePage: React.FC = () => {
	const isBrowser = browserCheck();
	if (!isBrowser) return <></>;
	return (
		<Suspense fallback={<PageSpin />}>
			<ZezaPage />
		</Suspense>
	);
};
export default HomePage;
