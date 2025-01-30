import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function ComboBox({ AllMatches }: any) {




    // You can add more match entries following the same structure
    return (
        <Autocomplete
            disablePortal
            options={AllMatches}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="{ AllMatches}" />}
        />
    );
}