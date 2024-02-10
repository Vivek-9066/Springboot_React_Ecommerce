import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10' container 
      sx={{bgcolor:'black', color:'white', py:3}}>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Company</Typography>
            <div>
                <Button className='pb-5' variant='h6' gutterBottom>About</Button>
            </div>
            <div>
                <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
            </div>
            <div>
                <Button className='pb-5' variant='h6' gutterBottom>Press</Button>
            </div>
            <div>
                 <Button className='pb-5' variant='h6' gutterBottom>Jobs</Button>
            </div>
           <div>
            <Button className='pb-5' variant='h6' gutterBottom>Partners</Button>
            </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Solutions</Typography>
            <div>
                <Button className='pb-5' variant='h6' gutterBottom>Marketing</Button>
            </div>
            <div>
                <Button className='pb-5' variant='h6' gutterBottom>Analytics</Button>
            </div>
            <div>
                <Button className='pb-5' variant='h6' gutterBottom>Commerce</Button>
            </div>
            <div>
                 <Button className='pb-5' variant='h6' gutterBottom>Insight</Button>
            </div>
           <div>
            <Button className='pb-5' variant='h6' gutterBottom>Support</Button>
            </div>

        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Documentation</Typography>
            <div>
                <Button className='pb-5' variant='h6' gutterBottom>About</Button>
            </div>
            <div>
                <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
            </div>
            <div>
                <Button className='pb-5' variant='h6' gutterBottom>Press</Button>
            </div>
            <div>
                 <Button className='pb-5' variant='h6' gutterBottom>Jobs</Button>
            </div>
           <div>
            <Button className='pb-5' variant='h6' gutterBottom>Partners</Button>
            </div>

        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Legal</Typography>
            <div>
                <Button component={Link} to="/privacy" sx={{textTransform: 'none'}} className='pb-5' variant='h6' gutterBottom>Privacy Policy</Button>
            </div>
            <div>
                <Button component={Link} to="/terms&conditions" sx={{textTransform: 'none'}} className='pb-5' variant='h6' gutterBottom>Terms & Conditions</Button>
            </div>
            <div>
                <Button component={Link} to="/cancellation" sx={{textTransform: 'none'}} className='pb-5' variant='h6' gutterBottom> Cancellation / Refund Policies</Button>
            </div>
            <div>
                 <Button component={Link} to="/about" sx={{textTransform: 'none'}} className='pb-5' variant='h6' gutterBottom>About us</Button>
            </div>
           <div>
            <Button  component={Link} to="/contact"  sx={{textTransform: 'none'}} className='pb-5' variant='h6' gutterBottom>Contact us</Button>
            </div>

        </Grid>

            <Grid className='pt-20' item xs={12}>
                <Typography variant='body2' component="p" align='center'>
                    &copy; 2023 E-Shopper. All right reserved.
                </Typography>
                <Typography variant='body2' component="p" align='center'>
                   Made with love by me.
                </Typography>
                <Typography variant='body2' component="p" align='center'>
                   Icons made by {""}
                   <Link href="#" color='inherit' underline='always'>
                    Freepik
                   </Link>{''}
                   from{''}
                   <Link href="#" color='inherit' underline='always'>
                    Freepik
                   </Link>

                </Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer
