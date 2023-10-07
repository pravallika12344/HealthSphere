

import defaulticon from "../../images/user.png"


const Onboarding = () => {
    return (<>
        <section>
            <div>
                <p>Upload your photo</p>
                <div>
                    <img src={defaulticon} />
                </div>
                <div>
                    <input type="phone" placeholder="Enter your Mobile Number" />
                    <input type="number" placeholder="Enter your Age" />
                    <select>
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>


                </div>
            </div>
        </section>





    </>)
}
export default Onboarding;