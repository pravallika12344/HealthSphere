import appointment from "../../images/8507.jpg";
import styles from "./consult.module.css"

const Consult = () => {
    return (
        <>
            <section className={styles.consultSection}>
                <div className={styles.formContainer}>
                    <form>
                        <div className={styles.container}>
                            <label>Name</label>
                            <input type="text" />
                        </div>
                        <div className={styles.container}>
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className={styles.container}>
                            <label>Mobile Number</label>
                            <input type="phone" />
                        </div>
                        <div className={styles.container}>
                            <label>Location</label>
                            <select>
                                <option>select location</option>
                                <option>Hyderabad</option>
                                <option>Chennai</option>
                                <option>Mumbai</option>
                                <option>Bangalore</option>
                            </select>
                        </div>
                        <div className={styles.container}>
                            <label>Speciality</label>
                            <select>
                                <option>select speciality</option>
                                <option>Cardiologist</option>
                                <option>ENT</option>
                                <option>Gynecologist</option>
                                <option>Oncologist</option>
                                <option>Physician</option>
                                <option>Psychiatrist</option>
                                <option>Dietician</option>
                                <option>Dermatologist</option>
                                <option>Orthopediac Surgeon</option>
                                <option>Pediatrician</option>
                                <option>Neurologist</option>
                                <option>Dentist</option>
                            </select>
                        </div>
                        <div className={styles.container}>
                            <label>Symptoms</label>
                            <input type="textarea" placeholder="describe symptoms" />
                        </div>
                        <div className={styles.container}>
                            <label>Medical History</label>
                            <input type="textarea" />
                        </div>
                        <div className={styles.container}>
                            <label>Appointment Date</label>
                            <input type="date" />
                        </div>
                        <div className={styles.container}>
                            <label>Appointment Type</label>
                            <select>
                                <option>At Hospital</option>
                                <option>Online Consultation</option>
                            </select>
                        </div>
                        <button className={styles.submit}>Submit</button>

                    </form>

                </div>
                <div className={styles.image}>
                    <img className={styles.appointment} src={appointment} />
                </div>

            </section>
        </>

    );
}

export default Consult;