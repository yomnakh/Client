import { FaCloudArrowUp } from "react-icons/fa6";

import React, { useEffect, useState } from "react";
import uploadImg from "../../Images/upload-img.png";
import { useDropzone } from "react-dropzone";

function DragDropImgSmall({ setImgUrl, index = 0 }) {
	const [files, setFiles] = useState([]);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: "image/*",
		multiple: false,
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	useEffect(() => {
		setImgUrl({ img: files[0]?.preview, index: +index });
	}, [files, setImgUrl, index]);

	return (
		<div>
			<label className="fw-bold text-capitalize mb-2">Company Logo</label>
			<div
				{...getRootProps()}
				className="cv-upload-img-container p-2 d-flex flex-column gap-1 align-items-center text-center upload-file"
			>
				<div>
					<FaCloudArrowUp className="upload-icon" />
				</div>
				<input {...getInputProps()} />
				{isDragActive ? (
					<h5 className="fw-bold">Drop file now... </h5>
				) : (
					<h5 className="fw-bold fs-13">
						Drag & drop files or{" "}
						<span className="text-decoration-underline text_primary clickable">Browse</span>
					</h5>
				)}
				<p
					className="fs-10 fw-bold text-secondary d-inline-block m-0"
					style={{ maxWidth: "300px" }}
				>
					Supported formats: JPEG, PNG, GIF. MP4. PDF, PSD, Al, Word, PPT
				</p>
			</div>
		</div>
	);
}

export default DragDropImgSmall;
