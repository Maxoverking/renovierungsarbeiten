import Contacts from "../ContactUs/ContactUs";
import Feedback from "../Feedback/Feedback";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import css from "./Hero.module.css";

export default function Hero(): JSX.Element {
  return (
    <>
      <Header />
      <div id="main" className={css.main}>
      </div>
      <Feedback />
      <Contacts />
      <Gallery />
    </>
  );
}
