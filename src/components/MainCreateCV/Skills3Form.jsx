import React, { useEffect, useRef } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { Tooltip } from "bootstrap";
import { LiaTrashAlt } from "react-icons/lia";
import { useOutletContext } from "react-router-dom";

function Skills3Form() {
	const tooltipRef = useRef(null);
	const [formData, , , , handelChangeSkills, addSkillInput, deleteSkill] = useOutletContext();
	const skills = formData?.skills;

	// enable bootstrap tooltip ------------------------------
	useEffect(() => {
		const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
		const tooltipList = [...tooltipTriggerList].map(
			(tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
		);
		return () => {
			tooltipList.map((t) => t.dispose());
		};
	}, []);

	return (
		<>
			<h5 className="mb-4  text-capitalize">Skills</h5>
			<div className="cv-form row g-3 fs-18">
				<div className="col-12 d-flex gap-3 align-items-center">
					<div className="d-flex flex-column gap-3 w-100">
						{skills &&
							skills?.map((ele, i) => (
								<div className="d-flex gap-2 align-items-center flex-grow-1" key={i}>
									<div className="flex-grow-1 ">
										<input
											type="text"
											className="form-control"
											id="inputSkills"
											name="skills"
											value={ele ?? ""}
											onChange={(e) => handelChangeSkills(e, i, "skills")}
											autoFocus
										/>
									</div>
									<div
										className="clickable click-primary hover-scale"
										ref={tooltipRef}
										data-bs-toggle="tooltip"
										data-bs-title="Remove item"
										onClick={() => deleteSkill(i, "skills")}
									>
										<LiaTrashAlt size={26} />
									</div>
								</div>
							))}
					</div>

					<div
						className="clickable click-primary hover-scale align-self-end mb-2"
						ref={tooltipRef}
						data-bs-toggle="tooltip"
						data-bs-title="Add new item"
						onClick={() => addSkillInput("skills")}
					>
						<AiOutlinePlusCircle size="26" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Skills3Form;
