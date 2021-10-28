import emailjs from "emailjs-com";
import { useState } from "react";
import styles from "../../styles/mailer.module.css"
import Image from 'next/image';

//import { useHistory } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const Mailer = () => {
    const [name, setName] = useState("");
    /*const [values, setValues] = useState({
        name: "",
        email:"",
        message: "",
    })*/
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
    
    /*let history = useHistory();

    const goTo = () => {
        history.push('/succes')
    }*/
    return (
        <div className={styles.box}>
            <form className={styles.box__text} onSubmit={sendEmail}>
                <label>Hey I'm </label>
                <input className={styles.input}
                        type="text" 
                        placeholder="your name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />!<br/>
                <label>I would like </label>
                <textarea className={styles.input}  name="message" rows="4" placeholder="project description" />
                <label>You can contact me via </label>
                <input className={styles.input} type="email" name="user_email" placeholder="your e-mail" />
                
                <p>Greetings {name}</p>
                <Image src="/gif/send-message.gif" width={535} height={180} alt="Hello" />
               <input
                    className={styles.button}
                    type="submit"
                    value="Send message"
                    to="/succes"
                />
            </form>
        </div>
    );
};

export default Mailer;