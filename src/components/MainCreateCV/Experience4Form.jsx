import React, { useEffect, useState } from "react";

import DragDropImgSmall from "./DragDropImgSmall";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { LiaTrashAlt } from "react-icons/lia";
import { useOutletContext } from "react-router-dom";

function Experience4Form() {
	const [formData, , , , , , , handelChangeComplex, deleteComplexItem, addComplexItem] =
		useOutletContext();
	const experience = formData?.experience;
	const setFormData = useOutletContext()[10];


	// when upload image add it to main state --------------------------
	const [imgUrl, setImgUrl] = useState({});
	useEffect(() => {
		if (imgUrl.img ) {
			let allData = formData?.experience;
			allData = [...allData];
			allData[imgUrl?.index] = { ...allData[imgUrl?.index], img: imgUrl?.img };
			setFormData({ ...formData, experience: allData });
		}
	}, [imgUrl]);

	return (
		<>
			<h5 className="mb-4 mb-lg-5">Experience</h5>

			<div className="d-flex flex-column gap-3 w-100">
				{experience?.map((ele, i) => (
					<div key={i}>
						<div className="add-experience-container row row-gap-3 g-2 align-items-center mx-0 mx-lg-2 px-0 px-lg-3 py-4 mb-3">
							<div className="col-12">
								<label htmlFor="inputCompanyName" className="form-label text-capitalize">
									company Name
								</label>
								<input
									type="text"
									className="form-control"
									id="inputCompanyName"
									name="companyName"
									value={ele?.companyName ?? ""}
									onChange={(e) => handelChangeComplex(e, i, "experience")}
									autoFocus
								/>
							</div>

							<div className="col-12">
								<label htmlFor="inputPositionName" className="form-label text-capitalize">
									Position
								</label>
								<input
									type="text"
									className="form-control"
									id="inputPositionName"
									name="position"
									value={ele?.position ?? ""}
									onChange={(e) => handelChangeComplex(e, i, "experience")}
								/>
							</div>

							<div className="col-12 col-lg-6 ">
								<label htmlFor="inputPeriodFrom" className="form-label text-capitalize">
									From
								</label>
								<input
									type="text"
									className="form-control"
									id="inputPeriodFrom"
									name="periodFrom"
									value={ele?.periodFrom ?? ""}
									onChange={(e) => handelChangeComplex(e, i, "experience")}
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
									onChange={(e) => handelChangeComplex(e, i, "experience")}
								/>
							</div>
							<div className="col-12 ">
								<div className="row g-3">
									<div className="col-12 col-lg-4 order-last order-lg-0 h-100">
										<DragDropImgSmall setImgUrl={setImgUrl} index={i} />
									</div>

									<div className="col-12 col-lg-8 h-100">
										<label htmlFor="inputDescription" className="form-label">
											Description
										</label>
										<textarea
											className="form-control"
											id="inputDescription"
											name="description"
											rows="5"
											value={ele?.description ?? ""}
											onChange={(e) => handelChangeComplex(e, i, "experience")}
										></textarea>
									</div>
								</div>
							</div>
						</div>

						<div
							className=" text-end pe-5 mb-4"
							data-bs-toggle="tooltip"
							data-bs-title="Remove item"
							onClick={() => deleteComplexItem(i, "experience")}
						>
							<LiaTrashAlt size={26} className="clickable click-primary hover-scale" />
						</div>
					</div>
				))}
			</div>

			<div
				className="circle-plus__icon  mb-2 pe-2  text-end"
				data-bs-toggle="tooltip"
				data-bs-title="Add new item"
				onClick={() => addComplexItem("experience")}
			>
				<AiOutlinePlusCircle size={26} className="clickable click-primary hover-scale" />
			</div>
		</>
	);
}

export default Experience4Form;
