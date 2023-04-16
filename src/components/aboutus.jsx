import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const About =()=>{

    return(
        <Grid container  style={{display:"flex",justifyContent:"center",backgroundColor:"#f140721f",alignItems:"center"}}>
           {/* small device*/}
           <Grid sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} className='imageContainer' item xs={8} md={5} style={{height:"220px",backgroundColor:"white",margin:"50px 25px",marginBottom:"0px",position:"relative",overflow:"hidden"}}>
                <img src='https://i.pinimg.com/originals/9e/a9/06/9ea9067642b36ecd117eb7ee3cbc78c3.jpg' />
            </Grid>
            <Grid item xs={12} md={5} sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} style={{textAlign:"center",height:"175px",margin:"75px 25px",flexDirection:"column",justifyContent:"center"}}>
                <Grid container style={{justifyContent: "center"}}>
                    <span style={{fontFamily:"Prata",fontSize:"33px",fontWeight:400,lineHeight:"38px",margin:"30px 0px"}}>Professional makeup by Gowdhami</span>
                </Grid>
                <Grid container >
                    <span style={{fontSize:"13px",fontWeight:400,lineHeight:"20px"}}>Gowdhami is one of the most prominent makeup artist in Chennai with more than 10 years of experience in Fine Arts & Fashion, She can give you a look ''You Truly Deserve" .</span>
                </Grid>
                <Grid container style={{margin:"20px 0px",justifyContent:"center"}}>
                    <Button style={{padding: "14px 30px",fontSize: "15px"}}variant="contained" color="secondary">CONTACT</Button>
                </Grid>
            </Grid>            
            {/* medium device*/}
            <Grid item xs={12} md={5} sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} style={{textAlign:"start",height:"500px",margin:"75px 25px",flexDirection:"column",justifyContent:"center"}}>
                <Grid container style={{width:"80%"}} >
                    <span style={{fontFamily:"Prata",fontSize:"40px",fontWeight:400,lineHeight:"50px",margin:"40px 0px"}}>Professional makeup by Gowdhami</span>
                </Grid>
                <Grid container style={{width:"80%"}}>
                    <span style={{fontSize:"16px",fontWeight:400,lineHeight:"26px"}}>Gowdhami is one of the most prominent makeup artist in Chennai with more than 10 years of experience in Fine Arts & Fashion, She can give you a look ''You Truly Deserve" .</span>
                </Grid>
                <Grid container style={{margin:"50px 0px"}}>
                    <Button style={{padding: "14px 30px",fontSize: "15px"}}variant="contained" color="secondary">CONTACT</Button>
                </Grid>
            </Grid>
            <Grid sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} className='imageContainer' item xs={12} md={5} style={{height:"500px",backgroundColor:"white",margin:"75px 25px",position:"relative",overflow:"hidden"}}>
                <img src='https://i.pinimg.com/originals/9e/a9/06/9ea9067642b36ecd117eb7ee3cbc78c3.jpg' />
            </Grid>
        </Grid>
    )
}

export default About;