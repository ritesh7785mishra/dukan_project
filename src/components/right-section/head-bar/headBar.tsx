import "./headBar.css";
import Left from "./left/left";
import Middle from "./middle/middle";
import Right from "./right/right";

export default function HeadBar() {
	return (
		<div className="headbar">
			<Left />
			<Middle />
			<Right />
		</div>
	);
}
