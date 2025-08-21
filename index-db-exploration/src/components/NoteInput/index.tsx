import {Button, Paper, Stack, TextField} from "@mui/material";
import type React from "react";

import { Card } from '@mui/material';

const NoteInput = () => {
    return <Card sx={{margin: '2rem', borderRadius:'2rem'}}>
        <Stack spacing={2} margin={"2rem"}>
            <TextField required id="outlined-required" label="Title"/>
            <TextField
                required
                id="outlined-textarea"
                label="Notes"
                placeholder="Note"
                multiline
            />
            <Button variant="contained">Submit</Button>
        </Stack>
    </Card>;
}

export default NoteInput;