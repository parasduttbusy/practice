import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button, Divider, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const buttons = ["settings", "address", "users", "credit", "retailer", "ledger"]

const nonFocusSX = {
    padding: 0, height: "50%", marginY: 0.5, width: "10%", color: "grey", borderRadius: 0, ":hover": {
        background: "#E9E7E7"
    }, borderRight: "1px dashed lightgray",
}

const focusSX = {
    padding: 0, height: "50%", marginY: 0.5, width: "10%", color: "grey", borderRadius: 0, ":hover": {
        background: "#E9E7E7"
    }, borderRight: "1px dashed lightgray", background: "#E9E7E7"
}

export default function RightSidebarMenu({ focus = { settings: true, address: false, users: false, credit: false, retailer: false, ledger: false } }) {
    
    return (
        <>
            <Stack direction="row" sx={{ display: { xs: "none", sm: "flex" } }} >
                {buttons.map((val, ind) => {
                    return (
                        <Button key={ind} sx={(val === "settings") ? focusSX : nonFocusSX}><Typography sx={{ textTransform: "capitalize" }}>{val}</Typography>
                            {/* <Divider orientation='horizontal' sx={{borderStyle:"dotted", color:"red"}}/> */}
                        </Button>
                    )
                })}
            </Stack>


            <FormControl fullWidth sx={{
                padding: 0, display: {
                    xs: "flex", sm: "none"
                }
            }} size='small'>
                <InputLabel id="demo-simple-select-label">Menu</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Menu"
                    sx={{ padding: 0 }}
                >
                    {buttons.map((val, ind) => {
                        return (<MenuItem key={ind} value={10}>{val}</MenuItem>)
                    })}

                </Select>
            </FormControl>
        </>
    );
}