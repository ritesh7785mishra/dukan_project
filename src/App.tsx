import "./App.css";
import LeftBottomLogo from "./components/left-bottom-logo/leftBottomLogo";

import LeftSlideOut from "./components/left-slidout/left-slideout";
import LeftTopLogo from "./components/left-top-logo/leftTopLogo";
import RightSection from "./components/right-section/right-section";

function App() {
	return (
		<div className="main">
			<div
				style={{
					display: "flex",
				}}
			>
				<section className="left-section">
					<LeftTopLogo />
					<LeftSlideOut />
					<LeftBottomLogo />
				</section>
				<section className="right-section">
					<RightSection />
				</section>
			</div>
		</div>
	);
}

export default App;
