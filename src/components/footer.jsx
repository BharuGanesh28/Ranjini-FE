import { Grid } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import { useInView, motion } from "framer-motion";


const Footer=()=>{
return(
<Grid container   style={{
    backgroundColor:'#3a3a3a',
    display:'flex',
    justifyContent:'space-evenly',padding:'30px'
    }} sx={{color:"primary.main",alignItems:{xs:"center"}}}  id="CONTACT">
    <Grid item xs={10} sm={5} md={2}  style={{justifyContent:'centre'}}> 
    <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}              
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
        >
    <Grid container sx={{color:"primary.main"}} style={{display:'flex',justifyContent:'space-evenly',}} >
        {/*<Grid item ><a  style={{color:"inherit"}} href="" target="blank"><FacebookIcon/></a></Grid>*/}
        <Grid item ><a  style={{color:"inherit",display:"flex"}} href="https://www.instagram.com/thamiz_artistry/?igshid=YmMyMTA2M2Y%3D" target="blank"><InstagramIcon style={{paddingRight:'6px'}} /><span>Instagram</span></a></Grid>
        {/*<Grid item ><a  style={{color:"inherit"}} href="" target="blank"><YouTubeIcon /></a></Grid>
        <Grid item ><a  style={{color:"inherit"}} href="" target="blank"><TwitterIcon/></a></Grid>
  <Grid item ><a  style={{color:"inherit"}} href="" target="blank"><LinkedInIcon/></a></Grid>*/}
    </Grid>
    </motion.div>
    </Grid>
    
    <Grid item style={{display:"flex",flexDirection:'row',justifyContent:'center'}} xs={10} sm={5} md={2} sx={{margin:{xs:"20px 0px",md:"20px 0px"}}}>
    <motion.div
    style={{display:"flex",flexDirection:'row',justifyContent:'center'}}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}              
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
        >
        <Grid item  style={{display: "flex",alignItems: "center",marginRight: "10px"}}><PhoneEnabledIcon style={{fontSize:"2rem"}}/></Grid>
        <Grid item ><p style={{margin:'0',fontSize:'15px',fontFamily:'PT Sans',fontWeight:'700'}}>Bookings</p>
        <p style={{margin:'0',fontSize:'14px',fontFamily:'PT Sans',fontWeight:'400'}}>+91-9790771141</p></Grid>
        
        </motion.div>
    </Grid>
   
    <Grid item style={{display:"flex",flexDirection:'row',justifyContent:'center'}} xs={10} sm={5} md={2} >
    <motion.div
    style={{display:"flex",flexDirection:'row',justifyContent:'center'}}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}              
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
        >
        <Grid item style={{display: "flex",alignItems: "center",marginRight: "10px"}}><MailOutlineIcon style={{fontSize:"2rem"}}/></Grid>
        <Grid item ><p style={{margin:'0',fontSize:'15px',fontFamily:'PT Sans',fontWeight:'700'}}>Send us a Mail</p>
        <p style={{margin:'0',fontSize:'14px',fontFamily:'PT Sans',fontWeight:'400'}}>thamizartistry@gmail.com</p></Grid>
        
        </motion.div>
    </Grid> 

    
    <Grid item style={{display:"flex",flexDirection:'row',justifyContent:'center',}} xs={10} sm={5} md={2} sx={{marginTop:{xs:"20px",md:"0px"}}}>
    <motion.div
    style={{display:"flex",flexDirection:'row',justifyContent:'center'}}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}              
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
        >
        <Grid item style={{display: "flex",alignItems: "center",marginRight: "10px"}}><NearMeIcon style={{fontSize:"2rem"}}/></Grid>
        <Grid item ><p style={{margin:'0',fontSize:'15px',fontFamily:'PT Sans',fontWeight:'700'}}>Our Location</p>
        <p style={{margin:'0',fontSize:'14px',fontFamily:'PT Sans',fontWeight:'400'}}>NO.156,Indragandhi Nagar,Kayarambedu.Guduvancherry </p></Grid>
    
    </motion.div>
    </Grid> 
    
</Grid>


)
}

export default Footer