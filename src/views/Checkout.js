import React from 'react';
import { Link } from "react-router-dom";
import "../css/checkout.css"
import  Button  from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Backspace, Payment } from '@material-ui/icons';
import { Card, MenuItem, ThemeProvider, Grid } from '@mui/material';
import { createTheme, makeStyles } from '@material-ui/core';

const newTheme = createTheme(
    {
    palette: {
        primary: {
            main: "#a52a2a",
        },
        background: {
            paper: "#e5e5e5"
        }
        
    } 
    }
    
)

const useStyles = makeStyles({
    txtfield: {
        border: "none",
        borderBottom: "solid 2px black"
    }
})
// export const ShowPurchases = createContext();

const Checkout = props => {
    
    const countries = [
        {
            country: "--- Please select ---"
        },
        {
            country: "Germany"
        },
        {
            country: "Austria"
        },
        {
            country: "Switzerland"
        },
        {
            country: "France"
        },
        {
            country: "Netherland"
        },
        {
            country: "Luxemburg"
        },
        {
            country: "Belgium"
        },
        {
            country: "Denmark"
        },
        {
            country: "Poland"
        },
        {
            country: "Czech Republic"
        },
    ]

    
    const classes = useStyles();
    return(
        
    <ThemeProvider theme={newTheme}>
        <h1 className="checkout-heading">Checkout</h1>
         <main className="checkout-form">
         <Grid container direction="row" justifyContent="center"
            alignItems="center">
            <Card sx={{ width: "60vw", padding:"40px" }}>
                <form onSubmit={props.submit} >
                    <h4>Shipping adress:</h4>
    
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={6}>
                        
                            <TextField className={classes.txtfield} id="firstName" sx={{width: "100%"}} label="First name" variant="standard" name="firstName" type="text" margin="normal"
                             value={props.userData.firstName} onChange={props.updateData} onBlur={props.errorOnBlur}></TextField>
                        
                            <div className="error" ref={props.formErrors.firstNameError}>Please enter a valid firstname.</div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="lastName" label="Last name" variant="standard" name="lastName" sx={{width: "100%"}} type="text" margin="normal" value={props.userData.lastName} onChange={props.updateData} onBlur={props.errorOnBlur}></TextField>
                            <div className="error" ref={props.formErrors.lastNameError}>Please enter a valid lastname.</div>
                        </Grid> 
                    </Grid>

                    <Grid container spacing={2} >
                        <Grid item xs={12} md={6}>
                            <TextField id="adress" label="Adress" variant="standard" name="adress" sx={{width: "100%"}} type="text" margin="normal" value={props.userData.adress} onChange={props.updateData} onBlur={props.errorOnBlur}></TextField>
                            <div className="error" ref={props.formErrors.adressError}>Please enter a valid adress.</div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="email" label="E-Mail" variant="standard" name="email" sx={{width: "100%"}} type="text" margin="normal" value={props.userData.email} onChange={props.updateData} onBlur={props.errorOnBlur}></TextField>
                            <div className="error" ref={props.formErrors.emailError}>Please enter a valid E-Mail-Adress.</div>
                        </Grid>
                    </Grid>    

                    <Grid container spacing={2} >
                        <Grid item xs={12} md={4}>
                            <TextField id="standard-basic" label="City" variant="standard" name="city" sx={{width: "100%"}} type="text" margin="normal" value={props.userData.city} onChange={props.updateData} onBlur={props.errorOnBlur}></TextField>
                            <div className="error" ref={props.formErrors.cityError}>Please enter a city.</div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField id="zip" label="Postal Code" variant="standard" name="zip" sx={{width: "100%"}} type="text" margin="normal" value={props.userData.zip} onChange={props.updateData} onBlur={props.errorOnBlur}></TextField>
                            <div className="error" ref={props.formErrors.zipError}>Please enter a valid postal code. (only numbers)</div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField id="county" label="Shipping Country" variant="standard" select name="country" sx={{width: "100%"}} type="text" margin="normal" value={props.userData.country} onChange={props.updateData} onBlur={props.errorOnBlur} >
                                {countries.map((currCountry, i) => {
                                    return (<MenuItem key={i} value= {currCountry.country}>
                                        {currCountry.country}
                                            </MenuItem>)
                                })}
                            </TextField>
                            <div className="error" ref={props.formErrors.countryError}>Please select an county</div>
                        </Grid>
                    </Grid>


                       

                    <Grid container direction="row" justifyContent="space-between" >    
                       <Link className="Link" to="/cart">
                            <Button
                            href="/cart" 
                            variant="contained"
                            startIcon={<Backspace />} 
                            style={{background: "#e6e6e6", color: "#a52a2a", border: "none", fontWeight: "700", marginTop: "20px"}}
                            >
                            back to Cart
                            </Button>
                        </Link>
                        
                        <Button 
                        variant="contained" 
                        color="primary"
                        endIcon={<Payment />}
                        style={{background: "#e6e6e6", color: "#a52a2a", border: "none", fontWeight: "700", marginTop: "20px"}}
                        type="submit">NEXT</Button>
                    </Grid>               
                </form>
            </Card>
            </Grid>       
         </main>
    </ThemeProvider>
    )
}

export default Checkout;