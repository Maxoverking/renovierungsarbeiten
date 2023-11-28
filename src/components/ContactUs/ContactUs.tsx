import { ChangeEvent, FormEvent, useState } from "react";
import InputMask from "react-input-mask";
import styles from "./ContactUs.module.css";
import { initContacUsForm } from "./interfaces/IContactUsForm";
import { Container, TextField } from "@mui/material";

export default function Contacts(): JSX.Element {
  const [
    { firstName, lastName, email, phoneNumber, questionText },
    setContactFormData,
  ] = useState(initContacUsForm);
  const maxLength = 500;
  const [charLeft, setCharLeft] = useState(maxLength);

  const collectAboutUsData = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setContactFormData((prev) => ({ ...prev, [name]: value }));

    if (questionText.length <= maxLength) {
      setCharLeft(maxLength - questionText.length);
    }
  };

  const BOT_TOKEN = import.meta.env.VITE_REACT_APP_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_REACT_APP_CHAT_ID;

  const sendMessageToTelegram = async (message: string) => {
    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });
      console.log("Notification successfully sent to Telegram");
    } catch (error) {
      console.error(
        "There was an error when sending a notification to Telegram:",
        error
      );
    }
  };

  const handleCreateRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message =
      "Новий запит на сайтi:" +
      "\n  Iм'я: " +
      firstName +
      "\n  Фамiлiя: " +
      lastName +
      "\n  E-mail: " +
      email +
      "\n  Телефон: " +
      phoneNumber +
      "\n\n  Текст запиту: " +
      questionText;
    sendMessageToTelegram(message);

    setContactFormData(initContacUsForm);
  };

  return (
    <>
      <div className={styles.contacts_main}>
        <h4>Haben Sie eine Frage an uns?</h4>
        <Container>
          <h4>Rückmeldeformular:</h4>
          <form className={styles.contacts_form} onSubmit={handleCreateRequest}>
            <div className={styles.contacts_input_div}>
              <TextField
                className="form-control"
                label="Vorname"
                type="text"
                name="firstName"
                value={firstName}
                onChange={collectAboutUsData}
                size="small"
                fullWidth
                required
              />
            </div>
            <div className={styles.contacts_input_div}>
              <TextField
                className="form-control"
                label="Name"
                type="text"
                name="lastName"
                value={lastName}
                onChange={collectAboutUsData}
                size="small"
                fullWidth
                required
              />
            </div>
            <div className={styles.contacts_input_div}>
              <TextField
                className="form-control"
                label="E-Mail"
                type="email"
                name="email"
                value={email}
                onChange={collectAboutUsData}
                size="small"
                fullWidth
                required
              />
            </div>
            <div className={styles.contacts_input_div}>
              <InputMask
                mask="+4 9(999) 999-9999"
                className={styles.form_control}
                type="tel"
                placeholder="+4 9(___) ___-____"
                name="phoneNumber"
                value={phoneNumber}
                onChange={collectAboutUsData}
              />
            </div>
            <p className={styles.contacts_info}>
              Wir werden Ihre Daten niemals mit jemand anderem teilen
            </p>
            <div>
              <textarea
                className={styles.questionTextInput}
                id="questionTextInput"
                rows={8}
                maxLength={maxLength}
                placeholder="Schreiben Sie hier Ihre Frage..."
                name="questionText"
                value={questionText}
                onChange={collectAboutUsData}
                style={{ resize: "none" }}
                required
              />
              <p className={styles.contacts_info_charLeft}>
                Noch {charLeft} Zeichen verfügbar
              </p>
            </div>
            <button id="liveToastBtn" type="submit" className="button_imker">
              Anfrage senden
            </button>
          </form>
        </Container>
      </div>
    </>
  );
}
