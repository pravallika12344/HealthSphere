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
	const [editMail, setEditMail] = useState(false);
	const [newMail, setNewMail] = useState("");
	const [editPhone, setEditPhone] = useState(false);
	const [newPhone, setNewPhone] = useState("");
	const [editState, setEditState] = useState(false);
	const [newState, setNewState] = useState("");
	const [editCity, setEditCity] = useState(false);
	const [newCity, setNewCity] = useState("");
	const [editAge, setEditAge] = useState(false);
	const [newAge, setNewAge] = useState("");

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
			console.error(error.message)
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
								readOnly={!editMail}
								onChange={
									(e) =>
										setNewMail(e.target.value)
								}
								type="Email"
							/>
							<button
								onClick={() => {
									setEditName(!editMail)
								}}>
								edit
							</button>
						</div>
						<div>
							<label>Phone:</label>
							<input
								value={userDetails?.phone}
								name="Phone"
								readOnly={!editPhone}
								onChange={
									(e) =>
										setNewPhone(e.target.value)
								}
								type="phone"
							/>
							<button
								onClick={() => {
									setEditPhone(!editPhone)
								}}>
								edit
							</button>
						</div>
						<div>
							<label>Age:</label>
							<input
								value={userDetails?.age}
								readOnly={!editAge}
								onChange={
									(e) =>
										setNewAge(e.target.value)
								}
								name="Age"
								type="number"
							/>
							<button onClick={
								() => {
									setEditAge(!editAge)
								}
							}>
								edit

							</button>
						</div>

						<div>
							<label>City:</label>
							<input
								value={userDetails?.city}
								readOnly={!editCity}
								onChange={
									(e) =>
										setEditCity(!editCity)
								}
								name="City"
								type="text"
							/>
							<button onClick={
								() => {
									setEditCity(!editCity)
								}
							}>
								edit

							</button>
						</div>

						<div>
							<label>State:</label>
							<input
								value={userDetails?.state}
								readOnly={!editState}
								onChange={
									(e) =>
										setEditState(!editState)
								}
								name="State"
								type="text"
							/>
							<button onClick={
								() => {
									setEditState(!editState)
								}
							}>

							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Profile;
