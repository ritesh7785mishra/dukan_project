import "./pagination.css";
export default function PaginationComp() {
	return (
		<div className="pagination-b">
			<div className="pg-l">
				<div className="pg-l-img">
					<img src="./assets/right.png" alt="" />
				</div>
				<p className="pg-text">Previous</p>
			</div>
			<div className="pg-m">
				<div className="s-bx">1</div>
				<div className="s-bx">...</div>
				<div className="s-bx active">10</div>
				<div className="s-bx">11</div>
				<div className="s-bx">12</div>
				<div className="s-bx">13</div>
				<div className="s-bx">14</div>
				<div className="s-bx">15</div>
				<div className="s-bx">16</div>
				<div className="s-bx">17</div>
				<div className="s-bx">18</div>
			</div>
			<div className="pg-r">
				<p className="pg-text">Next</p>
				<div className="pg-l-img">
					<img src="./assets/left.png" alt="" />
				</div>
			</div>
		</div>
	);
}
