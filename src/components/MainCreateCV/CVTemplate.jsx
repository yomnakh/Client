import React from "react";
import egyptFlagImg from "../../Images/Flag_of_Egypt.png";
import seff_logoImg from "../../Images/seff_logo_black.jpg";
import { websiteAvailableIcons } from "./data";
import { FaFacebook } from "react-icons/fa6";

function CVTemplate({ data }) {
	const main_info = data.main_information;
	const summary = data.about;
	const skills = data.skills;
	const education = data.education;
	const experience = data.experience;
	const honersAndAwards = data.honersAndAwards;
	const hobbiesAndInterests = data.hobbiesAndInterests;
	const links = data.links;

	return (
		<div className="ps-2 ">
			<div className="overflow-auto">
				<div id="CV_Template" className="row cv-part-1">
					<div className="col-4 px-3 py-5 bg_blue">
						<div className="overflow-hidden h-100 d-flex flex-column gap-4 ps-2">
							<div className="cv--avatar overflow-hidden">
								<img
									src={data?.image}
									alt={`${main_info?.firstName} ${main_info?.LastName}`}
									className="cv--avatar-img rounded-circle"
								/>
							</div>
							{/* personal information ------------------------------- */}
							<div>
								<h4 className="text-white fs-20">
									{`${main_info?.firstName || ""} ${main_info?.LastName || ""}`}
								</h4>
								<h6 className="text_gray fs-13">{main_info?.profession || ""}</h6>
							</div>
							<div className="d-flex flex-column gap-2 ">
								<div className="cv-squire-info">
									<h6 className="fs-12">
										{`${main_info?.state || ""}, ${main_info?.birthDay || ""}`}
									</h6>
								</div>
								<div className="cv-squire-info">
									<h6 className="fs-12">
										{main_info?.mobileNumber && `+${main_info?.mobileNumber || ""}`}
									</h6>
								</div>
								<div className="cv-squire-info">
									<h6 className="fs-12">{(main_info?.email && main_info?.email) || ""}</h6>
								</div>
								<div className="cv-squire-info">
									<h6 className="fs-12">{`${main_info?.city || ""}, ${
										main_info?.country || ""
									}`}</h6>
								</div>
							</div>
							{/* Skills --------------------------------- */}
							<div className="flex-grow-1">
								<h6 className="fw-bold mb-3">Skills</h6>
								<ul className="fs-11 ps-4">
									{skills && skills?.map((e, i) => e !== "" && <li key={i}>{e}</li>)}
								</ul>
							</div>
							{/* Honers & Awards --------------------------------- */}
							<div className="">
								<h6 className="fw-bold mb-3">Honers & Awards</h6>
								<div
									className="d-flex flex-column flex-wrap gap-2"
									style={{ minHeight: "40px" }}
								>
									{honersAndAwards?.map((ele, i) => (
										<div key={i}>
											<div className="d-flex justify-content-between w-100">
												<p className="m-0 fs-13">{ele?.awardName || ""}</p>
												<p className="m-0 fs-13">{ele?.awardYear || ""}</p>
											</div>
											<p className="m-0" style={{ fontSize: "10px" }}>
												{ele?.description || ""}
											</p>
										</div>
									))}
								</div>
							</div>
							{/* Hobbies & Interests ------------------------------- */}
							<div>
								<h6 className="fw-bold ">Hobbies & Interests</h6>
								<ul className="fs-13 ps-4" style={{ minHeight: "25px" }}>
									{hobbiesAndInterests &&
										hobbiesAndInterests?.map((e, i) => e !== "" && <li key={i}>{e}</li>)}
								</ul>
							</div>
							{/* Links and Credentials --------------------------------- */}
							<div className="">
								<h6 className="fw-bold mb-3">Links and Credentials</h6>

								<div className="d-flex flex-wrap g-2">
									{links &&
										links?.map(
											(ele, i) =>
												ele.sitename !== "" && (
													<a
														key={i}
														href={ele.url}
														className="text-light underline-none"
														style={{ flex: "1 0 50%" }}
														target="_blank"
														rel="noopener noreferrer"
													>
														{websiteAvailableIcons?.find((e) =>
															e.includes(ele?.sitename)
														) ? (
															<i
																className={`fa-brands fa-${
																	websiteAvailableIcons[
																		websiteAvailableIcons?.findIndex((e) =>
																			e.includes(ele?.sitename)
																		)
																	]
																}  me-2`}
															/>
														) : (
															<i className="fa-solid fa-up-right-from-square me-2"></i>
														)}
														<span className="fs-13">{ele?.sitename}</span>
													</a>
												)
										)}
								</div>
							</div>
						</div>
					</div>

					{/* part 2 right side ------------------------------------------------------ */}
					<div className="col-8 bg-light p-4 ">
						<div className="cv-part-2 overflow-hidden h-100 text-dark">
							<div className="part-title mb-4 ps-2">
								<h4 className="fs-20 fw-bold text_blue cv-section-title">About</h4>
								{summary && <p className="fs-11 fw-bold text-justify ">{summary}</p>}
							</div>

							{/* Education --------------------------------------------- */}
							<div className=" mb-4 ps-2">
								<h4 className="fs-20 fw-bold text_blue cv-section-title">Education</h4>

								<div className=" d-flex flex-column gap-3 ">
									{education &&
										education.map((ele, i) => (
											<div key={i} className="education-item d-flex gap-2">
												{(ele.periodFrom || ele.periodTo) && (
													<p className="  w-100" style={{ flex: "0 0 24%" }}>
														{ele.periodFrom || ""} - {ele.periodTo || ""}
													</p>
												)}
												{ele?.organizationName && (
													<ul className="education-details">
														<li className="cv-li-dot">
															<h5 className="fs-6 ">
																{ele?.organizationName || ""}
															</h5>
															<h6 className="fw-bold fs-12 text-black">
																{ele?.degree || ""}
															</h6>
															<p className="fs-11 text-muted text-justify mb-1">
																{ele?.description || ""}
															</p>
														</li>
													</ul>
												)}
											</div>
										))}
								</div>
							</div>

							{/* Experience --------------------------------------------- */}
							<div className=" mb-4 ps-2">
								<h4 className="fs-20 fw-bold text_blue cv-section-title">Experience</h4>

								<div className=" d-flex flex-column gap-3 pt-2 ">
									{experience?.map((ele, i) => (
										<div key={i} className="education-item d-flex gap-2">
											<div>
												{ele?.img && (
													<img
														src={ele?.img}
														alt={ele.companyName || ""}
														width="50px"
														height="auto"
													/>
												)}
											</div>
											{ele?.companyName && (
												<ul className="education-details">
													<li className="cv-li-dot">
														<h5 className="fs-6 ">{ele.companyName || ""}</h5>

														<h6 className="fw-bold fs-12 text-black">
															{`${ele?.position} | ${ele?.periodFrom} - ${ele?.periodTo}`}
															{/* {ele.position || ""} | {ele.periodFrom || ""} -{" "}
														{ele.periodTo || ""}
														frontend developer | Nov 2019 - present */}
														</h6>
														<p className="fs-11 text-muted text-justify mb-1">
															{ele?.description || ""}
														</p>
													</li>
												</ul>
											)}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CVTemplate;
