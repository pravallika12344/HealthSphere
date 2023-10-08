import { useEffect, useState, useContext } from "react";
import defaulticon from "../../images/user.png";
import styles from "../onboarding/onboarding.module.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../../context/usercontext";

const Onboarding = () => {
    const [ProfileImage, setProfileImage] = useState(null);
    const [UploadProfileImage, setUploadProfileImage] = useState(null);
    const [imgUrl, setimgUrl] = useState("")
    const [Phone, setPhone] = useState("");
    const [Age, setAge] = useState("");
    const [State, setState] = useState("");
    const [City, setCity] = useState("");
    const [Gender, setGender] = useState("");
    const { userData, GoogleUserData } = useContext(UserContext)
    const useremail = userData
    console.log(userData)
    console.log(GoogleUserData)

    const handleImageUpload = (event) => {
        const uploadedImage = event.target.files[0];
        setProfileImage(URL.createObjectURL(uploadedImage));
        setUploadProfileImage(uploadedImage);
    };
    useEffect(() => {

        const uploadImageToStorage = async () => {
            try {
                const imageReference = ref(storage, `ProfileImages/${UploadProfileImage?.name}`);
                await uploadBytes(imageReference, UploadProfileImage);
                const imageUrl = await getDownloadURL(imageReference)
                setimgUrl(imageUrl);
                console.log(imageUrl);
            }
            catch (error) {
                console.error(error.message);
            }
        }
        uploadImageToStorage()
    }, [UploadProfileImage])

    const onboardingData = {
        image: imgUrl,
        phone: Phone,
        age: Age,
        state: State,
        city: City,
        gender: Gender
    }

    const uploadOnboardingData = async (onboardingData) => {
        try {
            const documentRef = doc(db, "Users",)
        }
        catch (error) {
            console.error(error.message);
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
                                setPhone(e.target.value)
                            }}
                        />
                        <input
                            type="number"
                            placeholder="Enter your Age"
                            value={Age}
                            onChange={(e) => {
                                setAge(e.target.value)
                            }}
                        />
                        <input
                            type="text"
                            placeholder="State"
                            value={State}
                            onChange={(e) => {
                                setState(e.target.value)
                            }}

                        />
                        <input
                            type="text"
                            placeholder="City"
                            value={City}
                            onChange={(e) => {
                                setCity(e.target.value)
                            }}

                        />
                        <select name="Gender"
                            value={Gender}
                            onChange={(e) => {
                                setGender(e.target.value)

                            }}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div>
                        <button className={styles.button} onClick={() => {
                            uploadOnboardingData(onboardingData)
                        }}>Continue</button>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Onboarding;
