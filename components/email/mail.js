import emailjs from "emailjs-com";
import { useState } from "react";
import styles from "../../styles/Mail.module.css"

const Mail = () => {
    const [name, setName] = useState("");
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_53nax8k",
            "template_cz1zz0n",
            e.target,
            "user_Xdjav4TLY6uQOz61cfNDI"
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (
        <div className={styles.wrapper}>
            <form className={styles.form__contact} onSubmit={sendEmail}>
                <fieldset className={styles.fieldset}>
                    <p className={styles.p}>Hey, Stranger!</p>
                    <p>My name is 
                        <span 
                            className={`${styles.form__field} ${styles.field__name}`} 
                            data-placeholder="your name" 
                            tabIndex="1" 
                            contentEditable
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}>
                         </span> 
                        and I'm writting tou you since I'm interested in 
                        <span
                            className={`${styles.form__field} ${styles.field__message}`} 
                            >
                                <input 
                                tabIndex="2"
                                contentEditable
                                data-placeholder="your message" 
                                name="message"
                                />
                        </span>
                    .</p>
                    <p>This is my 
                        <span
                            className={`${styles.form__field} ${styles.field__email}`} 
                            data-placeholder="email address" 
                            tabIndex="3" 
                            contentEditable
                            type="email" 
                            name="user_email" >                           
                        </span>
                        
                    .</p>
                    <p className={styles.box__text}>Greetings {name}</p>               
                    <p className={styles.p}>Hope to get in touch soon. Cheers!</p>
                    <input
                        className={styles.button}
                        type="submit"
                        value="Send message"
                        to="/succes"
                        tabindex="4"
                    />
                </fieldset>
            </form>
        </div>
    );
};

export default Mail;