import "./btrTable.css";
export default function BtrTable() {
	const TableRow = () => (
		<tbody className="table-b">
			<p className="oid">#281209 </p>
			<p className="o-date">7 July, 2023</p>
			<p className="o-amount">₹1,278.23</p>
			<p className="tf">₹22</p>
		</tbody>
	);

	const renderTableRows = () => {
		const rows = [];
		for (let i = 0; i < 19; i++) {
			rows.push(<TableRow key={i} />);
		}
		return rows;
	};

	return (
		<div className="btrTable">
			<div className="table-h">
				<p className="oid">Order Id</p>
				<p className="o-date">
					Order date
					<span>
						<img src="./assets/triangle.png" alt="" />
					</span>
				</p>
				<p className="o-amount">Order Amount</p>

				<p className="tf">
					Transaction Fees
					<span>
						<img src="./assets/info.png" alt="" />
					</span>
				</p>
			</div>

			{renderTableRows()}
		</div>
	);
}
