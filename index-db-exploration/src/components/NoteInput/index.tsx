import { Button, Stack, TextField } from "@mui/material";
import type React from "react";
import { useRef } from "react";

import { Card } from "@mui/material";

interface NoteInputProps {
  handleUserInput: (title: string, note: string) => void;
}

export const NoteInput = ({ handleUserInput }: NoteInputProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const title = titleRef.current?.value || "";
    const notes = notesRef.current?.value || "";
    handleUserInput(title, notes);

    if (titleRef.current) {
      titleRef.current.value = "";
    }
    if (notesRef.current) {
      notesRef.current.value = "";
    }
  };

  return (
    <Card sx={{ margin: "2rem", borderRadius: "2rem" }}>
      <Stack spacing={2} margin={"2rem"}>
        <TextField
          required
          id="outlined-required"
          label="Title"
          inputRef={titleRef}
        />
        <TextField
          required
          id="outlined-textarea"
          label="Notes"
          multiline
          inputRef={notesRef}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </Card>
  );
};
