// import {Box, FormHelperText, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
// import React, { useEffect } from 'react'
// import Lottie from 'lottie-react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useForm } from "react-hook-form"
// import { ecommerceOutlookAnimation, shoppingBagAnimation} from '../../../assets'
// import {useDispatch,useSelector} from 'react-redux'
// import { LoadingButton } from '@mui/lab';
// import {selectLoggedInUser,loginAsync,selectLoginStatus, selectLoginError, clearLoginError, resetLoginStatus} from '../AuthSlice'
// import { toast } from 'react-toastify'
// import {MotionConfig, motion} from 'framer-motion'

// export const Login = () => {
//   const dispatch=useDispatch()
//   const status=useSelector(selectLoginStatus)
//   const error=useSelector(selectLoginError)
//   const loggedInUser=useSelector(selectLoggedInUser)
//   const {register,handleSubmit,reset,formState: { errors }} = useForm()
//   const navigate=useNavigate()
//   const theme=useTheme()
//   const is900=useMediaQuery(theme.breakpoints.down(900))
//   const is480=useMediaQuery(theme.breakpoints.down(480))
  
//   // handles user redirection
//   useEffect(()=>{
//     if(loggedInUser && loggedInUser?.isVerified){
//       navigate("/")
//     }
//     else if(loggedInUser && !loggedInUser?.isVerified){
//       navigate("/verify-otp")
//     }
//   },[loggedInUser])

//   // handles login error and toast them
//   useEffect(()=>{
//     if(error){
//       toast.error(error.message)
//     }
//   },[error])

//   // handles login status and dispatches reset actions to relevant states in cleanup
//   useEffect(()=>{
//     if(status==='fullfilled' && loggedInUser?.isVerified===true){
//       toast.success(`Login successful`)
//       reset()
//     }
//     return ()=>{
//       dispatch(clearLoginError())
//       dispatch(resetLoginStatus())
//     }
//   },[status])

//   const handleLogin=(data)=>{
//     const cred={...data}
//     delete cred.confirmPassword
//     dispatch(loginAsync(cred))
//   }

//   return (
//     <Stack width={'100vw'} height={'100vh'} flexDirection={'row'} sx={{overflowY:"hidden"}}>
        
//         {
//           !is900 && 
       
//         <Stack bgcolor={'#F6F4F1'} flex={1} justifyContent={'center'} >
//         </Stack> 
//         }

//         <Stack flex={1} justifyContent={'center'} alignItems={'center'}>

//               <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>

//                 <Stack rowGap={'.4rem'}>
//                   <Typography variant='h2' sx={{wordBreak:"break-word"}} fontWeight={600}>Mern Shop</Typography>
//                   <Typography alignSelf={'flex-end'} color={'GrayText'} variant='body2'>- Shop Anything</Typography>
//                 </Stack>

//               </Stack>

//                 <Stack mt={4} spacing={2} width={is480?"95vw":'28rem'} component={'form'} noValidate onSubmit={handleSubmit(handleLogin)}>

//                     <motion.div whileHover={{y:-5}}>
//                       <TextField fullWidth {...register("email",{required:"Email is required",pattern:{value:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,message:"Enter a valid email"}})} placeholder='Email'/>
//                       {errors.email && <FormHelperText sx={{mt:1}} error>{errors.email.message}</FormHelperText>}
//                     </motion.div>

                    
//                     <motion.div whileHover={{y:-5}}>
//                       <TextField type='password' fullWidth {...register("password",{required:"Password is required"})} placeholder='Password'/>
//                       {errors.password && <FormHelperText sx={{mt:1}} error>{errors.password.message}</FormHelperText>}
//                     </motion.div>
                    
//                     <motion.div whileHover={{scale:1.020}} whileTap={{scale:1}}>
//                       <LoadingButton fullWidth  sx={{height:'2.5rem'}} loading={status==='pending'} type='submit' variant='contained'>Login</LoadingButton>
//                     </motion.div>

//                     <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap-reverse'} >

//                       <MotionConfig whileHover={{x:2}} whileTap={{scale:1.050}}>
//                           <motion.div>
//                               <Typography mr={'1.5rem'} sx={{textDecoration:"none",color:"text.primary"}} to={'/forgot-password'} component={Link}>Forgot password</Typography>
//                           </motion.div>

//                           <motion.div>
//                             <Typography sx={{textDecoration:"none",color:"text.primary"}} to={'/signup'} component={Link}>Don't have an account? <span style={{color:theme.palette.primary.dark}}>Register</span></Typography>
//                           </motion.div>
//                       </MotionConfig>

//                     </Stack>

//                 </Stack>
//         </Stack>
//     </Stack>
//   )
// }
import {Box, FormHelperText, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import Lottie from 'lottie-react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { ecommerceOutlookAnimation, shoppingBagAnimation} from '../../../assets';
import {useDispatch,useSelector} from 'react-redux'
import { LoadingButton } from '@mui/lab';
import {selectLoggedInUser,loginAsync,selectLoginStatus, selectLoginError, clearLoginError, resetLoginStatus} from '../AuthSlice'
import { toast } from 'react-toastify'
import {MotionConfig, motion} from 'framer-motion'
import bugsAndHugsH4g from '../../../assets/images/bugsAndHugsH4g.png'
import mwhLogo from '../../../assets/images/mwh-logo.png'


export const Login = () => {
  const dispatch=useDispatch()
  const status=useSelector(selectLoginStatus)
  const error=useSelector(selectLoginError)
  const loggedInUser=useSelector(selectLoggedInUser)
  const {register,handleSubmit,reset,formState: { errors }} = useForm()
  const navigate=useNavigate()
  const theme=useTheme()
  const is900=useMediaQuery(theme.breakpoints.down(900))
  const is480=useMediaQuery(theme.breakpoints.down(480))
  
  // handles user redirection
  useEffect(()=>{
    if(loggedInUser && loggedInUser?.isVerified){
      navigate("/")
    }
    else if(loggedInUser && !loggedInUser?.isVerified){
      navigate("/verify-otp")
    }
  },[loggedInUser])

  // handles login error and toast them
  useEffect(()=>{
    if(error){
      toast.error(error.message)
    }
  },[error])

  // handles login status and dispatches reset actions to relevant states in cleanup
  useEffect(()=>{
    if(status==='fullfilled' && loggedInUser?.isVerified===true){
      toast.success(`Login successful`)
      reset()
    }
    return ()=>{
      dispatch(clearLoginError())
      dispatch(resetLoginStatus())
    }
  },[status])

  const handleLogin=(data)=>{
    const cred={...data}
    delete cred.confirmPassword
    dispatch(loginAsync(cred))
  }

  return (
    <Stack bgcolor={'#F6F4F1'} width={'100vw'} height={'100vh'} flexDirection={'row'} sx={{overflowY:"hidden"}}>
        
        {
          !is900 && 
       
        <Stack flex={1} justifyContent={'center'} alignItems={'center'}>
          {/* Logos */}
          <Stack flexDirection={'row'} spacing={4} alignItems={'center'}>
            <img src={bugsAndHugsH4g} alt="Hugs & More" style={{ width: '444px' }} />
            <img src={mwhLogo} alt="Muhammadiyah Welfare Home" style={{ width: '200px' }} />
          </Stack>
        </Stack> 
        }
        
        <Box flex={1} display="flex" justifyContent="center" alignItems="center">
          <Box width={is480 ? "90vw" : "30rem"} maxWidth="700px" p={4} borderRadius={8} boxShadow={3} bgcolor="white">

              <Stack flexDirection={'column'} justifyContent={'flex-start'} alignItems={'stretch'}>
                <Stack flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-end'}>
                  <Typography mt={1} color={'GrayText'} >No Account? </Typography>
                  <Link to={'/signup'} style={{color: theme.palette.primary.main, textDecoration: 'none'}} >Sign up</Link>
                </Stack>
                <Typography variant='h3' fontWeight={600} sx={{ alignSelf: 'flex-start' }}>Sign in</Typography>
              </Stack>

              <Stack mt={4} spacing={2} width={is480?"95vw":'28rem'} component={'form'} noValidate onSubmit={handleSubmit(handleLogin)}>

              <Stack flexDirection="row" justifyContent="center" spacing={2}>
                {/* Google Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <LoadingButton
                    fullWidth
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start', // Align text and logo horizontally
                      height: '2.5rem',
                      backgroundColor: '#ffffff',
                      color: '#000000',
                      border: '1px solid #ddd',
                    }}
                    type="button"
                    variant="contained"
                  >
                    <img
                      src="/path-to-google-icon.png"
                      alt="Google"
                      style={{ marginRight: '10px', width: '20px', height: '20px' }}
                    />
                    Sign in with Google
                  </LoadingButton>
                </motion.div>

                {/* Facebook Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <LoadingButton
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center', // Center logo for icon-only buttons
                      height: '2.5rem',
                      backgroundColor: '#4267B2',
                      color: '#ffffff',
                      width: '60px',
                    }}
                    type="button"
                    variant="contained"
                  >
                    <img
                      src="/path-to-facebook-icon.png"
                      alt="Facebook"
                      style={{ width: '20px', height: '20px' }}
                    />
                  </LoadingButton>
                </motion.div>

                {/* Apple Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <LoadingButton
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center', // Center logo for icon-only buttons
                      height: '2.5rem',
                      backgroundColor: '#000000',
                      color: '#ffffff',
                      width: '60px',
                    }}
                    type="button"
                    variant="contained"
                  >
                    <img
                      src="/path-to-apple-icon.png"
                      alt="Apple"
                      style={{ width: '20px', height: '20px' }}
                    />
                  </LoadingButton>
                </motion.div>
              </Stack>

                  <motion.div whileHover={{y:-5}}>
                    <TextField sx={{width:'90%'}} {...register("email",{required:"Email is required",pattern:{value:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,message:"Enter a valid email"}})} placeholder='Username or email address'/>
                    {errors.email && <FormHelperText sx={{mt:1}} error>{errors.email.message}</FormHelperText>}
                  </motion.div>

                  <motion.div whileHover={{y:-5}}>
                    <TextField type='password' sx={{width:'90%'}} {...register("password",{required:"Password is required"})} placeholder='Password'/>
                    {errors.password && <FormHelperText sx={{mt:1}} error>{errors.password.message}</FormHelperText>}
                  </motion.div>

                  <Stack flexDirection="row" justifyContent="flex-end">
                    <Typography 
                        sx={{ textDecoration: "none", color: theme.palette.primary.main, cursor: 'pointer' }} 
                        to={'/forgot-password'} 
                        component={Link}>
                        Forgot Password
                    </Typography>
                  </Stack>
                  
                  <motion.div whileHover={{scale:1.020}} whileTap={{scale:1}}>
                    <LoadingButton fullWidth  sx={{width: '90%', height:'2.5rem'}} loading={status==='pending'} type='submit' variant='contained'>Sign in</LoadingButton>
                  </motion.div>

              </Stack>
              </Box>
        </Box>
    </Stack>
  )
}
