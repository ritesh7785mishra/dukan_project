import "./leftBottomLogo.css";
export const LeftBottomLogo = () => {
	return (
		<div className="left-bottom-logo">
			<div className="wallet-image">
				<img src="./assets/wallet.png" alt="" />
			</div>
			<div className="left-bt-text">
				<p className="left-b-t">Available credits</p>
				<p className="left-b-b">222.10</p>
			</div>
		</div>
	);
};

export default LeftBottomLogo;
