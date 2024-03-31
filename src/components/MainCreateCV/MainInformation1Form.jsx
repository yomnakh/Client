import React, { useEffect, useState } from "react";
import egyptFlagImg from "../../Images/Flag_of_Egypt.png";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DragDropImg from "./DragDropImg";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

function MainInformation1Form() {
	const [formData, handelChange, , handelChangeMobile] = useOutletContext();
	const setFormData = useOutletContext()[10];
	const main_info = formData?.main_information;

	// when upload image add it to main state --------------------------
	const [imgUrl, setImgUrl] = useState("");
	useEffect(() => {
		setFormData((prev) => ({ ...prev, image: imgUrl }));
	}, [imgUrl, setFormData]);

	function formatDate(dateInput) {
		if (dateInput) {
			const selectedDate = new Date(dateInput);
			const dateFormatter = new Intl.DateTimeFormat("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});
			const formattedDate = dateFormatter?.format(selectedDate);
			return formattedDate;
		} else { return "" }
	}

	useEffect(() => {
		const inputdate = formData?.main_information?.date;
		const formattedDate = formatDate(inputdate) && formatDate(inputdate);
		let data = { ...formData?.main_information, birthDay: formattedDate };
		setFormData({ ...formData, main_information: (data || "") });
	}, [formData?.main_information?.date, setFormData]);

	return (
		<div>

			<form className="cv-form row g-3">
				<div className="col-12 col-md-6">
					<label htmlFor="inputFirstName" className="form-label">
						First Name
					</label>
					<input
						type="text"
						className="form-control"
						id="inputFirstName"
						name="firstName"
						value={main_info?.firstName ?? ""}
						onChange={(e) => handelChange(e, "main_information")}
						autoFocus
					/>
				</div>
				<div className="col-12 col-md-6">
					<label htmlFor="inputLastName" className="form-label">
						Last Name
					</label>
					<input
						type="text"
						className="form-control"
						id="inputLastName"
						name="LastName"
						value={main_info?.LastName ?? ""}
						onChange={(e) => handelChange(e, "main_information")}
					/>
				</div>
				<div className="col-12 col-md-6">
					<label htmlFor="inputProfession" className="form-label">
						Profession
					</label>
					<input
						type="text"
						className="form-control"
						id="inputProfession"
						name="profession"
						value={main_info?.profession ?? ""}
						onChange={(e) => handelChange(e, "main_information")}
					/>
				</div>
				<div className="col-12 col-md-6">
					<label htmlFor="inputCountry" className="form-label">
						Country
					</label>
					<input
						type="text"
						className="form-control"
						id="inputCountry"
						name="country"
						value={main_info?.country ?? ""}
						onChange={(e) => handelChange(e, "main_information")}
					/>
				</div>
				<div className="col-12 col-md-4">
					<label htmlFor="inputCity" className="form-label">
						City
					</label>
					<input
						type="text"
						className="form-control"
						id="inputCity"
						name="city"
						value={main_info?.city ?? ""}
						onChange={(e) => handelChange(e, "main_information")}
					/>
				</div>
				<div className="col-12 col-md-8">
					<label htmlFor="inputMobileNumber" className="form-label">
						Mobile Number
					</label>

					<PhoneInput
						country={"eg"}
						placeholder="+20 123 123 1233"
						name="mobileNumber"
						value={main_info?.mobileNumber || ""}
						onChange={handelChangeMobile}
						// countryCodeEditable={false}
						// disableAreaCodes={true}
						autoFormat={true}
					/>
				</div>

				<div className="col-12 col-md-6">
					<label htmlFor="inputCity" className="form-label">
						State
					</label>
					<input
						type="text"
						className="form-control"
						id="inputCity"
						name="state"
						value={main_info?.state ?? ""}
						onChange={(e) => handelChange(e, "main_information")}
					/>
				</div>

				<div className="col-12 col-md-6">
					<label htmlFor="inputCity" className="form-label">
						Birthday
					</label>
					<input
						type="date"
						className="form-control custom-date-input"
						id="inputDate"
						name="date"
						value={main_info?.date ?? ""}
						onChange={(e) => handelChange(e, "main_information")}
					/>
				</div>

				{/* ------------------ email ---------------------- */}
				<div className="col-12">
					<label htmlFor="inputCVEmail" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="inputCVEmail"
						name="email"
						value={main_info?.email ?? ""}
						onChange={(e) => handelChange(e, "main_information")}
					/>
				</div>

				<div className="col-12">
					<h6 className="fw-bold text-capitalize my-4">Personal Photo</h6>
					<DragDropImg setImgUrl={setImgUrl} />
				</div>
			</form>

		</div>
	);
}

export default MainInformation1Form;
