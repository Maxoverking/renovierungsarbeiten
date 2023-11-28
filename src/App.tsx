import { FC } from "react";
import "./App.module.css";
import Feedback from "./components/Feedback/Feedback";
import FeedbackAdmin from "./components/Admin/Feedback/FeedbackAdmin";

const App: FC = () => {
  return (
    <>
      <h1>renovierungsarbeiten</h1>
      <Feedback />
      <FeedbackAdmin />
    </>
  );
};

export default App;
