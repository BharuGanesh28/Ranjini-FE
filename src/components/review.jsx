import { Grid } from "@mui/material";
import GradeIcon from '@mui/icons-material/Grade';
import { useTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import LinearProgress from '@mui/material/LinearProgress';
import { useState } from "react";
import { useEffect } from "react";

const Review = () => {
    const theme = useTheme();
    const [reviewdata,setReviewData] = useState([]);
    useEffect(()=>{
        setReviewData([            
            {id:5,checked:false,progress:90,total:21},
            {id:4,checked:false,progress:4,total:9},
            {id:3,checked:false,progress:3,total:7},           
            {id:2,checked:false,progress:2,total:5},
            {id:1,checked:false,progress:1,total:1}
        ])
    },[])
    return (
        <Grid container sx={{ padding: { xs: "10vw 10vw", md: "2vw 7vw" } }}>
            <Grid className="title" sx={{ marginBottom: { xs: "5vh", md: "5vh" } }}>MAKEUP ARTIST REVIEWS</Grid>
            <Grid container>
                <Grid item md={5} style={{ border: "1px solid lightgrey", padding: "20px", borderRadius: "10px" }}>
                    <Grid container style={{margin: "10px 0px"}}>
                        <Grid item xs={8} style={{ display: "flex",fontSize: "17px",fontWeight: 400}}>Rating Distribution</Grid>
                        <Grid item xs={4} style={{marginTop:"-5px"}}>
                            <Grid container style={{ justifyContent: "flex-end" }}>
                                <span style={{ padding: "5px", alignItems: "center", display: "flex", borderRadius: "5px", backgroundColor: theme.palette.lightGreen.main, color: theme.palette.lightGreen.contrastText }}>
                                    <GradeIcon />
                                    <span style={{ marginLeft: "5px", marginBottom: "2px", marginRight: "3px" }}>4.0</span>
                                </span>
                            </Grid>
                            <Grid container style={{ justifyContent: "flex-end",marginTop:"5px" }}> 9 reviews</Grid>
                        </Grid>
                    </Grid>
                    {reviewdata.map(val=>
                        <Grid container style={{ alignItems: "center"}}>
                        <Checkbox  style={{paddingLeft:"0px"}}/>
                        <span>{val.id}</span>
                            <GradeIcon style={{fontSize: "17px",marginTop: "2px",marginLeft: "5px"}}/>
                            <LinearProgress color={"review"+val.id} style={{ width: "60%", height: "12px", borderRadius: "5px",marginLeft: "10px",marginRight: "13px",marginTop: "4px" }} variant="determinate" value={val.progress} />
                        <span style={{display: "flex",flex: 1,justifyContent: "flex-end"}}>{val.total} reviews</span>
                    </Grid>
                    )}                    
                </Grid>
                <Grid item md={6} style={{ border: "1px solid lightgrey", padding: "20px", borderRadius: "10px" }}>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default Review;