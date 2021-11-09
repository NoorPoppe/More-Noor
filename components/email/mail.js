import emailjs from "emailjs-com";
//import { useState } from "react";
import styles from "../../styles/Mail.module.css"
import style from "../../styles/mailer.module.css"
import { useState, useRef, useEffect } from "react";

const Mail = () => {
    const [content, setContent] = useState('');
    const [width, setWidth] = useState(0);
    const span = useRef();

    useEffect(() => {
        setWidth(span.current.offsetWidth);
    }, [content]);

    const changeHandler = evt => {
        setContent(evt.target.value);
    };
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
        <div className={`${style.box}${styles.wrapper}`}>
            <form className={styles.form__contact} onSubmit={sendEmail}>
                <fieldset className={styles.fieldset}>
                    <p>Hey, I'm
                        <wrapper is="custom" className={style.testyWrapper}>
                        <span 
                            className={`${styles.form__field} ${styles.field__name} ${style.testyhiddde}`}
                            id="hide"
                            ref={span}
                            /*placeholder="your name" */
                           
                            /*type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}*/>{content}
                         </span> 
                            <input
                                className={`${style.form__field} ${style.field__name}`}
                                tabIndex="1"
                                size="1"
                                rows="1"
                                placeholder="your name"
                                name="name"
                                value={name}
                                type="text"
                                style={{ width }}
                                autoFocus
                                onChange={ changeHandler}
                            />
                        </wrapper>!
                    </p>
                        and I'm writting tou you since I'm interested in 
                        <span
                            className={`${styles.form__field} ${styles.field__message}`} 
                            >
                                <input 
                                className={styles.test}
                                tabIndex="2"
                                contentEditable
                                placeholder="your message" 
                                name="message" 
                                />
                        </span>

                    <p>This is my 
                        <span
                            className={`${styles.form__field} ${styles.field__email}`} 
                            placeholder="email address" 
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