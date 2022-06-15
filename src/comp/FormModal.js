import React,{useState} from 'react'
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const s={
    width:400,
    m:1
}

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


const FormModal = (props) => {
    const [value, setValue] = React.useState(new Date(''));
    const [name,setName]=  useState("");
    const [email,setEmail]=  useState("");
    const [gender,setGender] = useState("");
    const [designation,setDesignation ] = useState('');
    const [skill,setSkill] = useState("");
    const [errors,setErrors] = useState({'name':false,'email':false,'gender':false,'designation':false,'skill':false});


      const handleChange = (newValue) => {
        setValue(newValue);
      };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

    const onSubmit =(e) =>{
        e.preventDefault();
        let err = false

        if(name.length < 1){
            setErrors({...errors,name:true})
            err = true
        }else{
            setErrors({...errors,"name":false})
        }
        
        if(email.length < 1){
            setErrors({...errors,"email":true})
            err = true
        }else{
            setErrors({...errors,"email":false})
        }

        if(gender.length < 1){
            setErrors({...errors,"gender":true})
            err = true
        }else{
            setErrors({...errors,"gender":false})
        }

        if(designation.length < 1){
            setErrors({...errors,"designation":true})
            err = true
        }else{
            setErrors({...errors,"designation":false})
        }

        if(skill.length < 1){
            setErrors({...errors,"skill":true})
            err = true
        }else{
            setErrors({...errors,"skill":false})
        }

        console.log(name)
        console.log(email)
        console.log(gender)
        console.log(designation)
        console.log(skill)
        console.log(value)
        if(err == true){
            return;
        }


        let data = JSON.parse(localStorage.getItem('data'))
        let obj = {id:1,name:name,email:email,gender:gender,designation:designation,skill:skill,date:value}

        data.push(obj)
        localStorage.setItem("data",JSON.stringify(data))

        setTimeout(() => {
            
            props.getData()
            handleClose()
        }, 500);

    }
    console.log(errors,"errors")
    const hangleError = (e) =>{
        console.log(e)
        let fi = e.target.name;
        let val = e.target.value;
        
        console.log(fi)
        console.log(val)
        if(fi == "name"){


            if(val.length < 1){
            setErrors({...errors,name:true})
        }else{
            setErrors({...errors,name:false})
        }
    }
    if(fi  == "email"){
        if(val.length < 1){
            setErrors({...errors,email:true})
        }else{
            setErrors({...errors,email:false})
        }
    }
    if(fi == "gender"){
        if(val.length < 1){
            setErrors({...errors,gender:true})
        }else{
            setErrors({...errors,gender:false})
        }
    }

    if(fi == "designation"){
        if(val.length < 1){
            setErrors({...errors,designation:true})
        }else{
            setErrors({...errors,designation:false})
        }
    }

    if(fi == "skill"){
        if(val.length < 1){
            setErrors({...errors,skill:true})
        }else{
            setErrors({...errors,skill:false})
        }
    }


    }
    console.log(errors,'name')
    return (
        <>
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
                            name="name"
                            error={errors.name}
                            label="Enter Name"
                            onBlur={hangleError}
                            
                            // helperText="Incorrect entry."
                            variant="filled"value={name} onChange={(e)=>setName(e.target.value)} />
                        <TextField 
                        sx={a} id="filled-basic" 
                        label="Enter Gmail" 
                        name="email"
                        error={errors.email}
                        onBlur={hangleError}
                        variant="filled" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <FormControl sx={b}>
                            <FormLabel id="demo-gender-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-gender-label"
                                defaultValue="female"
                                name="gender"
                                onBlur={hangleError}
                                error={errors.gender}
                                
                                value={gender}
                                onChange={(e)=>setGender(e.target.value)}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        {/* <TextField sx={a} id="filled-basic" value={designation} onChange={(e)=>setDesignation(e.target.value)}label="Designation" variant="filled" /> */}

                        <FormControl sx={s}>
                            <InputLabel id="demo-simple-select-label">Designation</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={designation}
                                onBlur={hangleError}
                                error={errors.designation}
                                name="designation"
                                label="designation"
                                onChange={(e)=>setDesignation(e.target.value)}
                            >
                                <MenuItem value={"Trainee"}>Trainee</MenuItem>
                                <MenuItem value={"Junior devloper"}>Junior devloper</MenuItem>
                                <MenuItem value={"Sinior devloper"}>Sinior devloper</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField sx={a} id="filled-basic" name="skill"  error={errors.skill} onBlur={hangleError} value={skill} onChange={(e)=>setSkill(e.target.value)} label="skill" variant="filled" />
                        <LocalizationProvider dateAdapter={AdapterDateFns} >
                            <Stack spacing={3} sx={c}>
                                <DesktopDatePicker
                                    label="Date desktop"
                                    inputFormat="MM/dd/yyyy"
                                    value={value}
                                    onBlur={hangleError}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>

                    </Grid>
                    <Button onClick={(e)=>onSubmit(e)} variant="contained" fullWidth>Submit </Button>
                </Box>
            </Modal>
        </>
    )
}

export default FormModal;
