
import { db } from "../../firebase";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/usercontext";



const Profile = () => {

    const { userData } = useContext(UserContext);
    const userEmail = userData?.user?.email;
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            const userRef = doc(db, "Users", userEmail);
            const docSnap = await getDoc(userRef);
            if (docSnap.exists) {
                setUserDetails(docSnap.data);
            }

        }
        getUserData();

    }, [])

    console.log(userDetails);


    return (
        <>
            <section>
                <div>
                    <div>
                        <img />
                    </div>
                    <div>
                        <div>
                            <label>Name:</label>
                            <input name="Name" type="text" />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input name="Email" type="Email" />
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input name="Phone" type="phone" />
                        </div>
                        <div>
                            <label>Age:</label>
                            <input name="Age" type="number" />
                        </div>

                        <div>
                            <label>City:</label>
                            <input name="City" type="text" />
                        </div>

                        <div>
                            <label>State:</label>
                            <input name="State" type="text" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )

}

export default Profile