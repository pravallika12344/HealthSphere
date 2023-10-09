import { db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/usercontext";
import styles from "./profile.module.css";

const Profile = () => {
	const { userData } = useContext(UserContext);
	const userEmail = userData?.user?.email;
	const [userDetails, setUserDetails] = useState(null);
	const [editName, setEditName] = useState(false);
	const [newName, setNewName] = useState("");
	useEffect(() => {
		try {
			const getUserData = async () => {
				const userRef = doc(db, "Users", userEmail);
				const docSnap = await getDoc(userRef);
				if (docSnap.exists) {
					setUserDetails(docSnap.data());
				}
				console.log("user details", userDetails);
			};
			getUserData();
		} catch (error) {
			if (
				error instanceof FirestoreError &&
				error.code === "unavailable"
			) {
				// Handle the offline scenario here, e.g., display a message to the user
				console.log(
					"Firestore is currently unavailable. Please check your internet connection."
				);
			} else {
				// Handle other errors here
				console.error(
					"Error fetching user data:",
					error.message
				);
			}
		}
	}, []);

	useEffect(() => {
		console.log("user details", userDetails);
	}, [userDetails]);

	console.log(userEmail);

	return (
		<>
			<section className={styles.section}>
				<div className={styles.container}>
					<div className={styles.profileImgContainer}>
						<img
							src={userDetails?.image}
							alt="profile"
							style={{ width: "50px" }}
						/>
					</div>
					<div>
						<div>
							<label>Name:</label>
							<input
								value={
									!editName
										? userDetails?.name
										: newName
								}
								name="Name"
								type="text"
								readOnly={!editName}
								onChange={(e) =>
									setNewName(e.target.value)
								}
							/>
							<button
								onClick={() =>
									setEditName(!editName)
								}
							>
								edit
							</button>
						</div>
						<div>
							<label>Email:</label>
							<input
								value={userDetails?.email}
								name="Email"
								readOnly
								type="Email"
							/>
						</div>
						<div>
							<label>Phone:</label>
							<input
								value={userDetails?.phone}
								name="Phone"
								readOnly
								type="phone"
							/>
						</div>
						<div>
							<label>Age:</label>
							<input
								value={userDetails?.age}
								readOnly
								name="Age"
								type="number"
							/>
						</div>

						<div>
							<label>City:</label>
							<input
								value={userDetails?.city}
								readOnly
								name="City"
								type="text"
							/>
						</div>

						<div>
							<label>State:</label>
							<input
								value={userDetails?.state}
								readOnly
								name="State"
								type="text"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Profile;
