import { useEffect, useState, useContext } from "react";
import defaulticon from "../../images/user.png";
import styles from "../onboarding/onboarding.module.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../../context/usercontext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Onboarding = () => {
	const [ProfileImage, setProfileImage] = useState(null);
	const [UploadProfileImage, setUploadProfileImage] = useState(null);
	const [imgUrl, setimgUrl] = useState("");
	const [Phone, setPhone] = useState("");
	const [Age, setAge] = useState("");
	const [State, setState] = useState("");
	const [City, setCity] = useState("");
	const [Gender, setGender] = useState("");
	const { userData, googleUserData } = useContext(UserContext);
	const navigate = useNavigate();
	const userEmail = userData?.user?.email || googleUserData?.user?.email;
	const handleImageUpload = (event) => {
		const uploadedImage = event.target.files[0];
		setProfileImage(URL.createObjectURL(uploadedImage));
		setUploadProfileImage(uploadedImage);
	};
	useEffect(() => {
		const uploadImageToStorage = async () => {
			try {
				const imageReference = ref(
					storage,
					`ProfileImages/${UploadProfileImage?.name}`
				);
				await uploadBytes(imageReference, UploadProfileImage);
				const imageUrl = await getDownloadURL(imageReference);
				setimgUrl(imageUrl);
			} catch (error) {
				console.error(error.message);
			}
		};
		uploadImageToStorage();
	}, [UploadProfileImage]);

	const onboardingData = {
		image: imgUrl,
		phone: Phone,
		age: Age,
		state: State,
		city: City,
		gender: Gender,
	};

	const uploadOnboardingData = async (onboardingData) => {
		try {
			const documentRef = doc(db, "Users", userEmail);
			await updateDoc(documentRef, onboardingData, { merge: true });
		} catch (error) {
			console.error(error.message);
		}
	};

	const handleButtonClick = () => {
		if (Phone !== "" && State !== "" && Age !== "" && City !== "" && Gender !== "") {
			navigate('/Home');
			uploadOnboardingData(onboardingData);

		}
		else {
			toast.warning("Don't leave fields empty")
		}


	}


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
							value={Phone}
							onChange={(e) => {
								setPhone(e.target.value);
							}}
						/>
						<input
							type="number"
							placeholder="Enter your Age"
							value={Age}
							onChange={(e) => {
								setAge(e.target.value);
							}}
						/>
						<input
							type="text"
							placeholder="State"
							value={State}
							onChange={(e) => {
								setState(e.target.value);
							}}
						/>
						<input
							type="text"
							placeholder="City"
							value={City}
							onChange={(e) => {
								setCity(e.target.value);
							}}
						/>
						<select
							name="Gender"
							value={Gender}
							onChange={(e) => {
								setGender(e.target.value);
							}}
						>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Others">Others</option>
						</select>
					</div>
					<div>
						<button
							className={styles.button}
							onClick={
								handleButtonClick
							}
						>
							Continue
						</button>
					</div>
				</div>
			</section>
		</>
	);
};
export default Onboarding;
