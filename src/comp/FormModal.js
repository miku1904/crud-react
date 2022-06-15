import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



const b = {
    right: 100,
    m: 2
}
const a = {
    m: 1,
    width: '50ch',
    // left: '50%',     
    // transform: 'translate(-50%, -10%)'

}
const c={
    width:400,
    m:2
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};


const FormModal = () => {
    const [value, setValue] = React.useState(new Date(''));
    
      const handleChange = (newValue) => {
        setValue(newValue);
      };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container justifyContent="center">
                        <TextField sx={a} id="filled-basic"
                            error
                            label="Enter Name"
                            helperText="Incorrect entry."
                            variant="filled" />
                        <TextField sx={a} id="filled-basic" label="Enter Gmail" variant="filled" />
                        <FormControl sx={b}>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <TextField sx={a} id="filled-basic" label="Designation" variant="filled" />
                        <TextField sx={a} id="filled-basic" label="skill" variant="filled" />
                        <LocalizationProvider dateAdapter={AdapterDateFns} >
                            <Stack spacing={3} sx={c}>
                                <DesktopDatePicker
                                    label="Date desktop"
                                    inputFormat="MM/dd/yyyy"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>

                    </Grid>
                    <Button variant="contained" fullWidth>Submit </Button>
                </Box>
            </Modal>
        </div>
    )
}

export default FormModal;
