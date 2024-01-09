import MiddleBottom from "./middle-botttom/middleBottom";
import MiddleTop from "./middle-top/middleTop";
import "./middleBar.css";

export default function MiddleBar() {
	return (
		<div className="middle-bar">
			<MiddleTop />
			<MiddleBottom />
		</div>
	);
}
