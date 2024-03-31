import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { LiaTrashAlt } from "react-icons/lia";
import { useOutletContext } from "react-router-dom";

function Links8Form() {
	const [formData, , , , , , , handelChangeComplex, deleteComplexItem, addComplexItem] =
		useOutletContext();
	const links = formData?.links;
	return (
		<>
			<h5 className="mb-4">Links</h5>

			<div className="d-flex flex-column flex-lg-row gap-3 w-100 py-4">
				<div className="d-flex flex-column w-100 gap-3">
					{links?.map((ele, i) => (
						<div
							key={i}
							className="d-flex flex-column flex-lg-row gap-2 w-100 align-items-center "
						>
							<div className="row d-flex w-100 flex-column flex-lg-row align-items-center g-3">
								<div className="col-12 col-lg-4">
									<label htmlFor="inputSiteName" className="form-label  text-capitalize">
										website
									</label>
									<input
										type="text"
										className="form-control"
										id="inputSiteName"
										name="sitename"
										value={ele.sitename ?? ""}
										onChange={(e) => handelChangeComplex(e, i, "links")}
										autoFocus
									/>
								</div>
								<div className="col-12 col-lg-8 ">
									<label htmlFor="inputURL" className="form-label text-capitalize">
										URL
									</label>
									<input
										type="text"
										className="form-control"
										id="inputURL"
										name="url"
										value={ele.url ?? ""}
										onChange={(e) => handelChangeComplex(e, i, "links")}
									/>
								</div>
							</div>
							<div
								className="clickable click-primary hover-scale align-self-end mb-2  pt-1 pe-5 pe-lg-0"
								onClick={() => deleteComplexItem(i, "links")}
							>
								<LiaTrashAlt size={26} />
							</div>
						</div>
					))}
				</div>
				<div
					className="clickable click-primary hover-scale align-self-end mb-2 pe-2"
					onClick={() => addComplexItem("links")}
					style={{ marginTop: "-48px" }}
				>
					<AiOutlinePlusCircle size="26" />
				</div>
			</div>
		</>
	);
}

export default Links8Form;
