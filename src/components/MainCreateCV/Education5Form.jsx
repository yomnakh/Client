import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { LiaTrashAlt } from "react-icons/lia";
import { useOutletContext } from "react-router-dom";

function Education5Form() {
	const [formData, , , , , , , handelChangeComplex, deleteComplexItem, addComplexItem] =
		useOutletContext();
	const education = formData?.education;

	return (
		<>
			<h5 className="mb-4 mb-lg-5">Education</h5>
			<div className="d-flex flex-column gap-3 w-100">
				{education?.map((ele, i) => (
					<div key={i}>
						<div className="add-experience-container row row-gap-3 g-2 align-items-center mx-0 mx-lg-2 px-0 px-lg-3 py-4 mb-3">
							<div className="col-12">
								<label
									htmlFor="inputOrganizationName"
									className="form-label text-capitalize"
								>
									Organization Name
								</label>
								<input
									type="text"
									className="form-control"
									id="inputOrganizationName"
									name="organizationName"
									value={ele?.organizationName ?? ""}
									onChange={(e) => handelChangeComplex(e, i, "education")}
									autoFocus
								/>
							</div>

							<div className="col-12">
								<label htmlFor="inputDegree" className="form-label text-capitalize">
									Position
								</label>
								<input
									type="text"
									className="form-control"
									id="inputDegree"
									name="degree"
									value={ele?.degree ?? ""}
									onChange={(e) => handelChangeComplex(e, i, "education")}
								/>
							</div>

							<div className="col-12 col-lg-6">
								<label htmlFor="inputPeriodFrom" className="form-label text-capitalize">
									From
								</label>
								<input
									type="text"
									className="form-control"
									id="inputPeriodFrom"
									name="periodFrom"
									value={ele?.periodFrom ?? ""}
									onChange={(e) => handelChangeComplex(e, i, "education")}
								/>
							</div>

							<div className="col-12 col-lg-6">
								<label htmlFor="inputPeriodTo" className="form-label text-capitalize">
									To
								</label>
								<input
									type="text"
									className="form-control"
									id="inputPeriodTo"
									name="periodTo"
									value={ele?.periodTo ?? ""}
									onChange={(e) => handelChangeComplex(e, i, "education")}
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
									rows="5"
									value={ele?.description ?? ""}
									onChange={(e) => handelChangeComplex(e, i, "education")}
								></textarea>
							</div>
						</div>

						<div
							className=" text-end pe-5 mb-4"
							data-bs-toggle="tooltip"
							data-bs-title="Remove item"
							onClick={() => deleteComplexItem(i, "education")}
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
				onClick={() => addComplexItem("education")}
			>
				<AiOutlinePlusCircle size={26} className="clickable click-primary hover-scale" />
			</div>
		</>
	);
}

export default Education5Form;
