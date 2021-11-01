import emailjs from "emailjs-com";
import { useState } from "react";
import styles from "../../styles/mailer.module.css"
import style from "../../styles/Mail.module.css"
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
        <div className={`${styles.box}${style.wrapper}`}>
            <form className={`${styles.form} ${style.form__contact}`}onSubmit={sendEmail}>
                <fieldset className={styles.fieldset}>
                <label className={`${styles.box__text}${style.p}`}>Hey I'm </label>
                <input className={`${style.form__field} ${style.field__name} ${style.span}${styles.input}`} 
                        data-placeholder="your name" 
                        tabIndex="1" 
                        contentEditable
                        size="17"
                        type="text" 
                        /*placeholder="your name"*/
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />.<br/>
                    <label className={`${styles.box__text}${style.p}`}>I would like </label>
                    <textarea className={`${styles.textarea} ${style.span}`}
                        name="message" 
                        size="1"
                        rows="1"
                        placeholder="project description" />
                    <label className={`${styles.box__text}${style.p}`}>You can contact me via </label>
                    <input className={`${styles.input} ${style.span}`} type="email" name="user_email" placeholder="your e-mail" />
                
                <p className={styles.box__text}>Greetings {name}</p>               
                <input
                    className={styles.button}
                    type="submit"
                    value="Send message"
                    to="/succes"
                />
            </fieldset>
            </form>
        </div>
    );
};

export default Mailer;