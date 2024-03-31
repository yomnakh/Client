import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { LiaTrashAlt } from "react-icons/lia";
import { useOutletContext } from "react-router-dom";

function HonersAndAwards6Form() {
	const [formData, , , , , , , handelChangeComplex, deleteComplexItem, addComplexItem] =
		useOutletContext();
	const honersAndAwards = formData?.honersAndAwards;
	return (
		<>
			<h5 className="mb-4 mb-lg-5 text-capitalize">Honers And Awards</h5>
			<div className="d-flex flex-column gap-3 w-100">
				{honersAndAwards?.map((ele, i) => (
					<div key={i}>
						<div className="add-experience-container row row-gap-3 g-2 align-items-center mx-0 mx-lg-2 px-0 px-lg-3 py-4 mb-3">
							<div className="col-12 col-lg-8">
								<label htmlFor="inputAwardName" className="form-label text-capitalize">
									Award Name
								</label>
								<input
									type="text"
									className="form-control"
									id="inputAwardName"
									name="awardName"
									value={ele?.awardName ?? ""}
									onChange={(e) => handelChangeComplex(e, i, "honersAndAwards")}
									autoFocus
								/>
							</div>

							<div className="col-12 col-lg-4">
								<label htmlFor="inputAwardYear" className="form-label text-capitalize">
									Year
								</label>
								<input
									type="text"
									className="form-control"
									id="inputAwardYear"
									name="awardYear"
									value={ele?.awardYear ?? ""}
									onChange={(e) => handelChangeComplex(e, i, "honersAndAwards")}
								/>
							</div>

							<div className="col-12 h-100">
								<label htmlFor="inputDescription" className="form-label">
									Description
								</label>
								<textarea
									className="form-control"
									id="inputDescription"
									name="description"
									rows="2"
									value={ele?.description ?? ""}
									onChange={(e) => handelChangeComplex(e, i, "honersAndAwards")}
								></textarea>
							</div>
						</div>

						<div
							className="cv-del-add__icon text-end pe-5 mb-4"
							data-bs-toggle="tooltip"
							data-bs-title="Remove item"
							onClick={() => deleteComplexItem(i, "honersAndAwards")}
						>
							<LiaTrashAlt size={26} className="clickable click-primary hover-scale" />
						</div>
					</div>
				))}
			</div>
			<div
				className="circle-plus__icon mb-2 pe-2  text-end"
				data-bs-toggle="tooltip"
				data-bs-title="Add new item"
				onClick={() => addComplexItem("honersAndAwards")}
			>
				<AiOutlinePlusCircle size={26} className="clickable click-primary hover-scale" />
			</div>
		</>
	);
}

export default HonersAndAwards6Form;
