import emailjs from "emailjs-com";
//import { useState } from "react";
import styles from "../../styles/mailer.module.css"
import style from "../../styles/Mail.module.css"

import Image from 'next/image';

//import { useHistory } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";

const Mailer = () => {
    const [content, setContent] = useState("");
    const [width, setWidth] = useState("");
    const [widthColum, setWidthColum] = useState("");
    const span = useRef();

    useEffect(() => {
        setWidth(span.current.offsetWidth);
    }, [content]);

    useEffect(() => {
        setWidthColum(span.current.offsetWidth);
    }, [content]);

    const changeHandler = evt => {
        setContent(evt.target.value);
    };
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
        <div className={`${styles.box} ${style.wrapper}`}>
            <form className={styles.form__contact} onSubmit={sendEmail}>
                <fieldset className={styles.fieldset}>
                    <p>Hey I'm         
                        <wrapper is="custom" className={styles.testyWrapper}>
                            <span className={`${styles.testyhiddde} ${styles.form__field} ${styles.field__name} ${style.testyhiddde}`}
                                id="hide"
                                ref={span}>{content}
                            </span>
                            <input
                                className={`${style.form__field} ${styles.input} ${style.field__name} ${styles.testy}`}
                                type="text"
                                tabIndex="1"
                                style={{ width }}
                                autoFocus
                                onChange={changeHandler}
                                placeholder=" your name "
                                name="name"
                            />
                        </wrapper>!
                    </p>
                    <p className={styles.wouldLLike}>I would like: <br/>
                        <wrapper is="custom" className={styles.testyWrapper}>
                            <span className={`${styles.testyhiddde} ${styles.form__field} ${styles.field__name} ${style.testyhiddde}`}
                                id="hide"
                                ref={span}>{content}
                            </span>
                            <textarea
                                className={` ${styles.input}  ${styles.textarea}`}
                                type="text"
                                wrap="physical"
                                tabIndex="2"
                                style={{ widthColum }}
                                autoFocus
                                onChange={changeHandler}
                                placeholder=" Project description "
                                name="message"
                                rows="1"
                            />
                        </wrapper>.
                    </p>
                    <p>You can contact me via
                        <wrapper is="custom" className={styles.testyWrapper}>
                            <span className={`${styles.testyhiddde} ${styles.form__field} ${styles.field__name} ${style.testyhiddde}`}
                                id="hide"
                                ref={span}>{content}
                            </span>
                            <input
                                className={`${style.form__field} ${styles.input} ${style.field__name} ${styles.testy}`}
                                type="email"
                                name="user_email"
                                placeholder="your e-mail"
                                tabIndex="3"
                                style={{ width }}
                                autoFocus
                                onChange={changeHandler}
                            />
                        </wrapper>!
                    </p>                    
                    <p className={styles.box__text}>Greetings</p>
                    <input
                        className={styles.button}
                        type="submit"
                        value="Send message"
                        to="/succes"
                    />

                    <Image className={styles.imageMessage} src="/img/message.png" width={600} height={340} alt="button-more-work" />

                </fieldset>
            </form>
        </div>
    );
};

export default Mailer;