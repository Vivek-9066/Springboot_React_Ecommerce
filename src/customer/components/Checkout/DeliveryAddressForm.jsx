import { Box, Button, Grid,TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { useDispatch } from 'react-redux'
import { createOrder } from '../../../State/Order/Action'
import { useNavigate } from 'react-router-dom'

const DeliveryAddressForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("streetAddress"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            mobile: data.get("mobile")
        }

       
        const orderData={address,navigate}
        dispatch(createOrder(orderData))
        console.log("address :",address)
    }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} sm={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
            <div className='p-5 py-7 border-b cursor-pointer'>
                <AddressCard />
                <Button sx={{mt:2,bgcolor:"#9155fd"}} size='large' variant='contained'>Deliver Here</Button>
            </div>
        </Grid>

        <Grid item xs={12} sm={7}>
            <Box className="border rounded-s-md shadow-md p-3">
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>

                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id="firstName"
                            name='firstName'
                            label='First Name'
                            fullWidth
                            autoComplete='given-name'>
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id="lastName"
                            name='lastName'
                            label='Last Name'
                            fullWidth
                            autoComplete='given-name'>
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                            required
                            id="streetAddress"
                            name='streetAddress'
                            label='Street Address'
                            fullWidth
                            autoComplete='given-name'
                            multiline
                            rows={3}>
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id="city"
                            name='city'
                            label='City'
                            fullWidth
                            autoComplete='given-name'>
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id="state"
                            name='state'
                            label='State / Province / Region'
                            fullWidth
                            autoComplete='given-name'>
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id="zip"
                            name='zip'
                            label='Zip / Postal Code'
                            fullWidth
                            autoComplete='shipping postal-code'>
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id="mobile"
                            name='mobile'
                            label='Phone Number'
                            fullWidth>
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        <Button type="submit" sx={{mt:2,bgcolor:"#9155fd"}} size='large' variant='contained'>Deliver Here</Button>
                        </Grid>

                    </Grid>
                </form>

            </Box>

        </Grid>

      </Grid>
    </div>
  )
}

export default DeliveryAddressForm
