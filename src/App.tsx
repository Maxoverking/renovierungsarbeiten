import { FC } from "react";
import "./App.module.css";
import Feedback from "./components/Feedback/Feedback";
import Contacts from "./components/ContactUs/ContactUs";
import AdminPage from "./components/Admin/AdminPage";

const App: FC = () => {
  return (
    <>
      <h1>renovierungsarbeiten</h1>
      <Feedback />
      <Contacts />
      <AdminPage />
    </>
  );
};

export default App;
