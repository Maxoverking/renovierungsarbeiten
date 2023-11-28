import { FC } from "react";
import "./App.module.css";
import Feedback from "./components/Feedback/Feedback";
import FeedbackAdmin from "./components/Admin/Feedback/FeedbackAdmin";
import Contacts from "./components/ContactUs/ContactUs";

const App: FC = () => {
  return (
    <>
      <h1>renovierungsarbeiten</h1>
      <Feedback />
      <FeedbackAdmin />
      <Contacts />
    </>
  );
};

export default App;
