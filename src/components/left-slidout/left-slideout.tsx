import { sidePanelArray } from "../../constants/side-panel";
import "./left-slideout.css";

const Pair = ({ title, icon }: any) => {
	return (
		<>
			<div className="left-pair">
				<div className="pair-image">
					<img src={icon} alt="" />
				</div>

				<p className="pair-title">{title}</p>
			</div>
		</>
	);
};

const LeftSlideOut = () => {
	return (
		<div className="left-slide-out">
			{sidePanelArray.map((item) => {
				return <Pair title={item.title} icon={item.icon} />;
			})}
		</div>
	);
};

export default LeftSlideOut;
