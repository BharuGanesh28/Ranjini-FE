import { Grid } from "@mui/material";
import GradeIcon from '@mui/icons-material/Grade';
import { useTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import LinearProgress from '@mui/material/LinearProgress';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Review = () => {
    const theme = useTheme();
    const [reviewdata, setReviewData] = useState([]);
    const [reviews,setReviews] = useState([]);
    useEffect(() => {
        setReviewData([
            { id: 5, checked: false, progress: 90, total: 21 },
            { id: 4, checked: false, progress: 4, total: 9 },
            { id: 3, checked: false, progress: 3, total: 7 },
            { id: 2, checked: false, progress: 2, total: 5 },
            { id: 1, checked: false, progress: 1, total: 1 }
        ]);
        setReviews([
            {userName:"Vasuki",userImage:null,createdAt:"Reviewed 7 months ago",reviewStar:"5.0",reviewMessage:"I absolutely loved my makeover with Gowdhami. She has a keen eye for detail and knows exactly how to bring out your best features. Her makeup skills are amazing and I felt like a princess after the makeover. Highly recommended!"},
            {userName:"Meena",userImage:null,createdAt:"Reviewed 7 months ago",reviewStar:"5.0",reviewMessage:"Gowdhami is a true artist when it comes to makeup. She transformed my look completely and made me feel so confident and beautiful. Her professionalism and attention to detail are truly commendable. Thank you, Gowdhami, for the amazing makeover!"}
        ])
    }, [])
    return (
        <Grid container sx={{ padding: { xs: "10vw 10vw", md: "2vw 7vw" } }} id="REVIEW">
            <Grid className="title" sx={{ marginBottom: { xs: "5vh", md: "5vh" } }}>MAKEUP ARTIST REVIEWS</Grid>
            <Grid container style={{ justifyContent: "space-between",marginBottom:"10px" }}>
                <Grid item md={5} style={{ border: "1px solid lightgrey", padding: "20px", borderRadius: "10px" }}>
                    <Grid container style={{ margin: "10px 0px" }}>
                        <Grid item xs={8} style={{ display: "flex", fontSize: "17px", fontWeight: 400 }}>Rating Distribution</Grid>
                        <Grid item xs={4} style={{ marginTop: "-5px" }}>
                            <Grid container style={{ justifyContent: "flex-end" }}>
                                <span style={{ padding: "5px", alignItems: "center", display: "flex", borderRadius: "5px", backgroundColor: theme.palette.lightGreen.main, color: theme.palette.lightGreen.contrastText }}>
                                    <GradeIcon />
                                    <span style={{ marginLeft: "5px", marginBottom: "2px", marginRight: "3px" }}>4.0</span>
                                </span>
                            </Grid>
                            <Grid container style={{ justifyContent: "flex-end", marginTop: "5px" }}> 9 reviews</Grid>
                        </Grid>
                    </Grid>
                    {reviewdata.map(val =>
                        <Grid container style={{ alignItems: "center" }}>
                            <Checkbox style={{ paddingLeft: "0px" }} />
                            <span>{val.id}</span>
                            <GradeIcon style={{ fontSize: "17px", marginTop: "2px", marginLeft: "5px" }} />
                            <LinearProgress color={"review" + val.id} style={{ width: "60%", height: "12px", borderRadius: "5px", marginLeft: "10px", marginRight: "13px", marginTop: "4px" }} variant="determinate" value={val.progress} />
                            <span style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>{val.total} reviews</span>
                        </Grid>
                    )}
                </Grid>
                <Grid item md={6} style={{ border: "1px solid lightgrey", padding: "20px", borderRadius: "10px",display: "flex",flexDirection: "column", justifyContent: "space-between"}}>
                    <Grid container>
                        <span>Review Gowdhami Makeover Artistry</span>
                    </Grid>
                    <Grid container>
                       {
                        [1,2,3,4,5].map(val=><StarOutlineIcon style={{fontSize: "30px",color:"lightgrey"}}/>)
                       }
                    </Grid>
                    <Grid container>
                    <TextareaAutosize
                        aria-label="Tell us about your experience"
                        minRows={8}
                        placeholder="Tell us about your experience"
                        style={{ width: "100%",padding:"15px" }}
                        />
                    </Grid>
                    <Grid container>
                        <Button variant="contained" color="secondary"> SUBMIT REVIEW</Button>
                    </Grid>
                </Grid>
            </Grid>
            {reviews.map(val=>
               <Grid container style={{ border: "1px solid lightgrey", margin: "10px 0px",padding:"20px", borderRadius: "10px" }}>
                    <Grid container style={{marginBottom:"10px"}}>
                        <Grid item><AccountCircleIcon style={{color: "lightgrey",fontSize: "60px"}}/></Grid>
                        <Grid item style={{margin: "8px 10px"}}>
                            <Grid container>
                                <Grid item>{val.userName}</Grid>
                                <Grid item style={{marginLeft:"5px"}}>
                                <span style={{ padding: "3px",marginRight:"5px", alignItems: "center", display: "flex", borderRadius: "5px", backgroundColor: theme.palette.lightGreen.main, color: theme.palette.lightGreen.contrastText }}>
                                    <GradeIcon style={{fontSize:"16px"}} />
                                    <span style={{ marginLeft: "5px", fontSize: "12px", marginRight: "3px" }}>{val.reviewStar}</span>
                                </span>
                                </Grid>
                            </Grid>
                            <Grid container style={{color:"grey",fontSize:"14px"}}>{val.createdAt}</Grid>
                        </Grid>
                    </Grid>
                    <Grid container style={{textAlign:"start"}}>{val.reviewMessage}</Grid>
               </Grid> 
                )}
            
        </Grid>
    )
}

export default Review;