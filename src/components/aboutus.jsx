import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const About =()=>{
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    return(
        <Grid ref={ref} container  style={{display:"flex",justifyContent:"center",backgroundColor:"#f140721f",alignItems:"center"}} id="ABOUT">
           {/* small device*/}
           <Grid sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} className='imageContainer' item xs={8} md={5} style={{height:"220px",margin:"50px 25px",marginBottom:"0px",position:"relative",overflow:"hidden"}}>
           <motion.div
    animate={isInView  ? { opacity: 1 , scale: [0,1] } : { opacity: 0, scale: 0 }}
    transition={{ duration: 1,ease: "easeInOut" }}
    >
    <img src='https://i.pinimg.com/originals/9e/a9/06/9ea9067642b36ecd117eb7ee3cbc78c3.jpg'/>
    </motion.div>
            </Grid>
            <Grid item xs={12} md={5} sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} style={{textAlign:"center",height:"175px",margin:"75px 25px",flexDirection:"column",justifyContent:"center"}}>
                <Grid container sx={{justifyContent: "center",fontSize:{xs:"1.5rem",md:"33px"}}} >
                <motion.div
              animate={isInView  ? { opacity: 1 , scale: [0,0,1] } : { opacity: 0, scale: 0 }}
              transition={{ duration: 1,ease: "easeInOut" }}
            >
                    <span style={{fontFamily:"Prata",fontSize:"inherit",fontWeight:400,lineHeight:"38px",margin:"25px 0px"}}>Professional makeup by Gowdhami</span>
                </motion.div>
                </Grid>
                <Grid container >
                <motion.div
              animate={isInView  ? { opacity: 1 , scale: [0,0,0,1] } : { opacity: 0, scale: 0 }}
              transition={{ duration: 1.5,ease: "easeInOut" }}
            >
                    <span style={{fontSize:"13px",fontWeight:400,lineHeight:"20px"}}>Gowdhami is one of the most prominent makeup artist in Chennai with more than 10 years of experience in Fine Arts & Fashion, She can give you a look ''You Truly Deserve" .</span>
                    </motion.div>
                </Grid>
                <Grid container style={{margin:"30px 0px",justifyContent:"center"}}>
                <motion.div
              animate={isInView  ? { opacity: 1 , scale: [0,0,0,0,0,1] } : { opacity: 0, scale: 0 }}
              transition={{ duration: 2,ease: "easeInOut" }}
            >
                <a href='#CONTACT'> <Button style={{padding: "14px 30px",fontSize: "15px"}}variant="contained" color="secondary">CONTACT</Button></a>
                </motion.div>
                </Grid>
            </Grid>            
            {/* medium device*/}
            <Grid item xs={12} md={5} sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} style={{textAlign:"start",height:"500px",margin:"75px 25px",flexDirection:"column",justifyContent:"center"}}>
                <Grid container style={{width:"80%"}} >
                <motion.div
              animate={isInView  ? { opacity: 1 , scale: [0,1] } : { opacity: 0, scale: 0 }}
              transition={{ duration: 1,ease: "easeInOut" }}
            >
                    <span style={{fontFamily:"Prata",fontSize:"40px",fontWeight:400,lineHeight:"50px",margin:"40px 0px"}}>Professional makeup by Gowdhami</span>
                </motion.div>
                </Grid>
                <Grid container style={{width:"80%"}}>
                <motion.div
              animate={isInView  ? { opacity: 1 , scale: [0,0,1] } : { opacity: 0, scale: 0 }}
              transition={{ duration: 1.5,ease: "easeInOut" }}
            ><span style={{fontSize:"16px",fontWeight:400,lineHeight:"26px"}}>Gowdhami is one of the most prominent makeup artist in Chennai with more than 10 years of experience in Fine Arts & Fashion, She can give you a look ''You Truly Deserve" .</span>
                </motion.div></Grid>
                <Grid container style={{margin:"50px 0px"}}>
                <motion.div
              animate={isInView  ? { opacity: 1 , scale: [0,0,0,0,1] } : { opacity: 0, scale: 0 }}
              transition={{ duration: 2,ease: "easeInOut" }}
            ><a href='#CONTACT'><Button style={{padding: "14px 30px",fontSize: "15px"}}variant="contained" color="secondary">CONTACT</Button></a>
                </motion.div></Grid>
            </Grid>
            
            <Grid sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} className='imageContainer' item xs={12} md={5} style={{height:"500px",margin:"75px 25px",position:"relative",overflow:"hidden"}}>
            <motion.div
    animate={isInView  ? { opacity: 1 , scale: [0,0,0,1] } : { opacity: 0, scale: 0 }}
    transition={{ duration: 3,ease: "easeInOut" }}
    >
    <img src='https://i.pinimg.com/originals/9e/a9/06/9ea9067642b36ecd117eb7ee3cbc78c3.jpg'/>
    </motion.div>
            </Grid>
        </Grid>
    )
}

export default About;