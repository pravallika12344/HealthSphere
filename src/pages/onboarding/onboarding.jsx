import { useState } from "react";
import defaulticon from "../../images/user.png";
import styles from "../onboarding/onboarding.module.css";

const Onboarding = () => {
	const [ProfileImage, setProfileImage] = useState(null);
	const handleImageUpload = (event) => {
		const uploadedImage = event.target.files[0];
		setProfileImage(URL.createObjectURL(uploadedImage));
	};
	return (
		<>
			<section>
				<div>
					<p>Upload your photo</p>
					<div>
						<label
							htmlFor="upload"
							className={styles.uploadPhoto}
						>
							{ProfileImage ? (
								<img
									src={ProfileImage}
									alt="img"
								/>
							) : (
								<>
									<img
										src={defaulticon}
										alt="img"
									/>
									<div>
										<span
											style={{
												fontSize: 12,
												color: "rgb(69, 153, 156)",
											}}
										>
											Upload
										</span>
										<span
											style={{
												fontSize: 12,
												color: "rgb(69, 153, 156)",
											}}
										>
											+
										</span>
									</div>
								</>
							)}
						</label>
						<input
							type="file"
							id="upload"
							accept="image/*"
							onChange={handleImageUpload}
							style={{ display: "none" }}
							required
						/>
					</div>
					<div>
						<input
							type="phone"
							placeholder="Enter your Mobile Number"
						/>
						<input
							type="number"
							placeholder="Enter your Age"
						/>
						<select>
							<option>Gender</option>
							<option>Male</option>
							<option>Female</option>
						</select>
					</div>
				</div>
			</section>
		</>
	);
};
export default Onboarding;
