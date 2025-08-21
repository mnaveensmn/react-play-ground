import type React from "react";
import { NoteInput } from "../components/NoteInput";

const MainPage: React.FC = () => {
  const handleUserInput = (title: string, notes: string) => {
    console.log(notes);
  };

  return <NoteInput handleUserInput={handleUserInput} />;
};

export default MainPage;
