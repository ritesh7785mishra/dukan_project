import "./bottomRightSection.css";
import BtrTable from "./btrTable/btrTable";
import PaginationComp from "./pagination-comp/paginationComp";

export default function BottomRightSection() {
	return (
		<div className="bottom-right-section">
			<p className="h-text">Transactions | This Month</p>
			<div
				className="table-container
            "
			>
				<div className="table-search-bar">
					<div className="tsb-left">
						<div className="s-c">
							<img src="./assets/searchBold.png" alt="" />
						</div>
						<p className="s-t">Search By OrderId..</p>
					</div>

					<div className="tsb-right">
						<div className="sort-c">
							<p className="sort-text">Sort</p>
							<div className="sort-img">
								<img src="./assets/sort.png" alt="" />
							</div>
						</div>
						<div className="d-img">
							<img src="./assets/download.png" alt="" />
						</div>
					</div>
				</div>

				<BtrTable />
				<PaginationComp />
			</div>
		</div>
	);
}
