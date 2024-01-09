import BottomRightSection from "./bottom-right-section/bottomRightSection";
import HeadBar from "./head-bar/headBar";
import MiddleBar from "./middle-bar/middleBar";
import "./right-section.css";
export default function RightSection() {
	return (
		<div>
			<HeadBar />
			<div className="right-b-section">
				<MiddleBar />
				<BottomRightSection />
			</div>
		</div>
	);
}
