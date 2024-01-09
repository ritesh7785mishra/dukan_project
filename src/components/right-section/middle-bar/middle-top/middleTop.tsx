import "./middletTop.css";

export default function MiddleTop() {
	return (
		<div className="middle-t">
			<div className="mid-l">
				<p className="mid-l-t">Overview</p>
			</div>
			<div className="mid-r">
				<p>Last Month</p>
				<div>
					<img src="./assets/arrow.png" alt="" />
				</div>
			</div>
		</div>
	);
}
