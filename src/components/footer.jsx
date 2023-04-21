import { Grid } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NearMeIcon from '@mui/icons-material/NearMe';

const Footer=()=>{
return(
<Grid container style={{
    backgroundColor:'#3a3a3a',
    display:'flex',
    justifyContent:'space-evenly',
    padding:'30px'
    
}} sx={{color:"primary.main",alignItems:{xs:"center"}}} id="CONTACT">
    <Grid item xs={10} sm={5} md={2}  style={{justifyContent:'centre'}}> 
    <Grid container sx={{color:"primary.main"}} style={{display:'flex',justifyContent:'space-evenly'}} >
        <Grid item ><a  style={{color:"inherit"}} href="" target="blank"><FacebookIcon/></a></Grid>
        <Grid item ><a  style={{color:"inherit"}} href="" target="blank"><InstagramIcon /></a></Grid>
        <Grid item ><a  style={{color:"inherit"}} href="" target="blank"><YouTubeIcon /></a></Grid>
        <Grid item ><a  style={{color:"inherit"}} href="" target="blank"><TwitterIcon/></a></Grid>
        <Grid item ><a  style={{color:"inherit"}} href="" target="blank"><LinkedInIcon/></a></Grid>
    </Grid>
    </Grid>
    <Grid item style={{display:"flex",flexDirection:'row',justifyContent:'center'}} xs={10} sm={5} md={2} sx={{margin:{xs:"20px 0px",md:"20px 0px"}}}>
        <Grid item  style={{display: "flex",alignItems: "center",marginRight: "10px"}}><PhoneEnabledIcon style={{fontSize:"2rem"}}/></Grid>
        <Grid item ><p style={{margin:'0',fontSize:'15px',fontFamily:'PT Sans',fontWeight:'700'}}>Bookings</p>
        <p style={{margin:'0',fontSize:'14px',fontFamily:'PT Sans',fontWeight:'400'}}>+91 9003879399</p></Grid>
    </Grid>
   
    <Grid item style={{display:"flex",flexDirection:'row',justifyContent:'center'}} xs={10} sm={5} md={2} >
        <Grid item style={{display: "flex",alignItems: "center",marginRight: "10px"}}><MailOutlineIcon style={{fontSize:"2rem"}}/></Grid>
        <Grid item ><p style={{margin:'0',fontSize:'15px',fontFamily:'PT Sans',fontWeight:'700'}}>Send us a Mail</p>
        <p style={{margin:'0',fontSize:'14px',fontFamily:'PT Sans',fontWeight:'400'}}>info@tamilartist.com</p></Grid>
    </Grid> 

    
    <Grid item style={{display:"flex",flexDirection:'row',justifyContent:'center',}} xs={10} sm={5} md={2} sx={{marginTop:{xs:"20px",md:"0px"}}}>
        <Grid item style={{display: "flex",alignItems: "center",marginRight: "10px"}}><NearMeIcon style={{fontSize:"2rem"}}/></Grid>
        <Grid item ><p style={{margin:'0',fontSize:'15px',fontFamily:'PT Sans',fontWeight:'700'}}>Our Location</p>
        <p style={{margin:'0',fontSize:'14px',fontFamily:'PT Sans',fontWeight:'400'}}>100/108, dubai main road, dubai</p></Grid>
    </Grid> 
    
</Grid>


)
}

export default Footer