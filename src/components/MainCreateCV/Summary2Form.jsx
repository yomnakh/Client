import React from "react";
import { useOutletContext } from "react-router-dom";

function Summary2Form() {
	const [formData, , handelChangeAbout] = useOutletContext();
	const summary = formData?.about;

	return (
		<form className="cv-form row g-3 fs-18">
			<div className="col-12">
				<label htmlFor="inputAbout" className="form-label">
					About
				</label>
				<textarea
					className="form-control"
					id="inputAbout"
					name="about"
					rows="5"
					value={summary}
					onChange={handelChangeAbout}
					autoFocus
				></textarea>
			</div>
		</form>
	);
}

export default Summary2Form;
