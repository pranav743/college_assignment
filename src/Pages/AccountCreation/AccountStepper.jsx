import '../../App.css';
import CustomizedSteppers from '../../components/stepper';
import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react';

const AccountStepper = () => {

    const [stage, setStage] = useState(0);
    const steps = ['Personal Information', 'Account Setup', 'Profile Information', 'Address Details'];
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [contactNumberError, setContactNumberError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleFirstNameChange = (e) => {
        const value = e.target.value;
        setFirstName(value);

    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
    };

    const validateEmail = () => {
        if (!email) {
            setEmailError('Email is required');
            return false
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid Email');
            return false
        } else {
            setEmailError('');
            return true
        }
    }

    const handleLastNameChange = (e) => {
        const value = e.target.value;
        setLastName(value);
    };

    const validateName = () => {

        if (!firstName) {
            setFirstNameError('First Name is required');
            return false
        } else {
            setFirstNameError('');
        }
        if (!lastName) {
            setLastNameError('Last Name is required');
            return false
        } else {
            setLastNameError('');
            return true
        }
    }

    const handleContactNumberChange = (e) => {
        const value = e.target.value;
        setContactNumber(value);

    };
    const validateContactNumber = () => {
        if (!contactNumber) {
            setContactNumberError('Contact Number is required');
        } else if (!/^\d{10}$/.test(contactNumber)) {
            setContactNumberError('Invalid Contact Number');
            return false
        } else {
            setContactNumberError('');
            return true
        }
    }



    const nextPage = () => {

        if (validateName() && validateEmail() && validateContactNumber()) {
            setStage((init) => {

                if (init != 2) {
                    return init + 1
                } else {
                    return init
                }
            });
        }


    }
    const prevPage = () => {
        setStage((init) => {

            if (init != 0) {
                return init - 1
            } else {
                return init
            }


        });
    }


    return (

        <div className='background '>

            <div className='form'>
                <div style={{ textAlign: 'center', margin: '20px 0 35px 0', fontSize: '22px' }}>{steps[stage]}</div>
                <div><CustomizedSteppers activeStep={stage} /></div>


                {(stage == 0) &&

                    <Grid container spacing={0} columns={2} >
                        <Grid xs={2} md={1} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                <div className='text-wrapper'>
                                    <input
                                        className='text-field'
                                        placeholder='First Name'
                                        value={firstName}
                                        onChange={handleFirstNameChange}
                                    />

                                </div>


                                <div className='text-wrapper'>
                                    <input
                                        className='text-field'
                                        placeholder='Email'
                                        value={email}
                                        onChange={handleEmailChange}
                                    />

                                </div>




                            </div>
                        </Grid>
                        <Grid xs={2} md={1} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                <div className='text-wrapper'>
                                    <input
                                        className='text-field'
                                        placeholder='Last Name'
                                        value={lastName}
                                        onChange={handleLastNameChange}
                                    />
                                </div>


                                <div className='text-wrapper'>
                                    <input
                                        className='text-field'
                                        placeholder='Contact Number'
                                        value={contactNumber}
                                        onChange={handleContactNumberChange}
                                    />
                                </div>



                            </div>

                        </Grid>
                    </Grid>

                }
                {(stage == 1) &&

                    <div style={{width: '100%', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                        <p style={{width: '85%', fontSize: '18px', color: 'grey', marginBottom: '10px'}}>Enter your Bio: </p>
                        <textarea className='bio'>

                        </textarea>
                    </div>

                }

                {(stage == 2) &&

                    <Grid container spacing={0} columns={2} >
                        <Grid xs={2} md={1} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                
                                <div className='text-wrapper'>
                                    <input
                                        className='text-field'
                                        placeholder='Username'
                                    />
                                </div>

                                <div className='text-wrapper'>
                                    <input
                                        className='text-field'
                                        placeholder='Password'
                                    />
                                </div>

                            </div>
                        </Grid>
                        <Grid xs={2} md={1} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div className='text-wrapper'>
                                    <input
                                        className='text-field'
                                        placeholder='Address'
                                    />
                                </div>
                                <div className='text-wrapper'>
                                    <input
                                        className='text-field'
                                        placeholder='Re-enter Password'
                                    />
                                </div>

                            </div>

                        </Grid>
                    </Grid>

                }
                {firstNameError && <p className='error'>{firstNameError}</p>}
                {lastNameError && <p className='error'>{lastNameError}</p>}
                {emailError && <p className='error'>{emailError}</p>}
                {contactNumberError && <p className='error'>{contactNumberError}</p>}





                <div className='button-container'>
                    {(stage > 0) ?
                        <Button variant="outlined" startIcon={<ArrowBackIosIcon />} onClick={prevPage} sx={{
                            borderRadius: '20px',
                            height: '40px',
                            color: 'red',
                            border: 'red',
                            '&:hover': {
                                borderColor: 'red', // Change the border color to red on hover
                            },
                        }}>
                            Back
                        </Button> : <span></span>}
                    <Button variant="contained" endIcon={<ArrowForwardIosIcon />} onClick={nextPage} sx={{
                        borderRadius: '20px',
                        height: '40px',
                        color: 'white',
                        border: 'red',
                        backgroundColor: 'red',
                        '&:hover': {
                            borderColor: 'red',
                            backgroundColor: 'white',
                            color: 'red'
                        },
                    }} >
                        {(stage != 2) ? "Next" : "Done"}
                    </Button>

                </div>
            </div>

        </div>
    )
}

export default AccountStepper
