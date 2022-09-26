import React, { Suspense } from "react";
import { PageSpin } from "../components/atm.spin/spin";
import { browserCheck } from "../utils/hooks/browser-check";
import VickyPage from "./vicky";

const HomePage: React.FC = () => {
	const isBrowser = browserCheck();
	if (!isBrowser) return <></>;
	return (
		<Suspense fallback={<PageSpin />}>
			<VickyPage />
		</Suspense>
	);
};
export default HomePage;
