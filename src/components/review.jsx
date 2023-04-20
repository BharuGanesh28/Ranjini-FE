import { Grid } from "@mui/material";
import GradeIcon from '@mui/icons-material/Grade';
import { useTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import LinearProgress from '@mui/material/LinearProgress';
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Input from '@mui/material/Input';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Rating from '@mui/material/Rating';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function getReviewDateString(createdAt) {
    const now = new Date();
    const reviewDate = new Date(createdAt);
    const diffInMilliseconds = now - reviewDate;

    const units = [
        { label: "year", divisor: 1000 * 60 * 60 * 24 * 365 },
        { label: "month", divisor: 1000 * 60 * 60 * 24 * 30 },
        { label: "day", divisor: 1000 * 60 * 60 * 24 },
        { label: "hour", divisor: 1000 * 60 * 60 },
        { label: "minute", divisor: 1000 * 60 },
        { label: "second", divisor: 1000 },
    ];

    for (let i = 0; i < units.length; i++) {
        const unit = units[i];
        const diff = Math.floor(diffInMilliseconds / unit.divisor);

        if (diff >= 1) {
            return `Reviewed ${diff} ${unit.label}${diff === 1 ? "" : "s"} ago`;
        }
    }

    return "Reviewed just now";
}

function getReviewSummary(reviews) {
    const summary = [
        { id: 5, checked: false, progress: 0, total: 0 },
        { id: 4, checked: false, progress: 0, total: 0 },
        { id: 3, checked: false, progress: 0, total: 0 },
        { id: 2, checked: false, progress: 0, total: 0 },
        { id: 1, checked: false, progress: 0, total: 0 },
    ];

    for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        const star = review.reviewStar;

        for (let j = 0; j < summary.length; j++) {
            const s = summary[j];

            if (s.id === star) {
                s.total++;
                s.progress = Math.round((s.total / reviews.length) * 100);
                break;
            }
        }
    }
    return summary;
}

function getReviewSummaryStats(summary) {
    let sumStars = 0;
    let totalReviews = 0;
    for (let i = 0; i < summary.length; i++) {
        sumStars += summary[i].id * summary[i].total;
        totalReviews += summary[i].total;
    }
    const averageStar = totalReviews === 0 ? 0 : sumStars / totalReviews;
    return { totalReviews, averageStar };
}

var allReveiws = [];
var checkedStarts = [];
var displayRange = 5;
const Review = () => {
    const theme = useTheme();
    const [reviewdata, setReviewData] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [reviewStar, setReviewStart] = useState(0);
    const [reviewerName, setReviewerName] = useState("");
    const [reviewermessage, setReviewermessage] = useState("");
    const [snackMessage, setSnackMessage] = useState("");
    const [totalReviews, setTotalReviews] = useState(0);
    const [averageStar, setAverageStar] = useState(0.0);
    const [open, setOpen] = useState(false);
    const [numReviewsDisplayed, setNumReviewsDisplayed] = useState(5);
    // Update the number of reviews displayed based on screen size
    useEffect(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 600) {
            displayRange = 2;
              setNumReviewsDisplayed(2);
          }
          else if (screenWidth < 1200) {
            displayRange = 3;
              setNumReviewsDisplayed(3);
          }else {
            displayRange = 5;
              setNumReviewsDisplayed(5);
          }
    }, []);
    // Show the next 5 reviews when the "see more" button is clicked
    const handleSeeMore = () => {
        setNumReviewsDisplayed(numReviewsDisplayed + displayRange);
    };

    useEffect(() => {

        fetch("https://ranjini-portfolio.onrender.com/reviews").then(response => response.json()).then((res) => {
            let summary = getReviewSummary(res);
            setReviewData(summary);
            let { totalReviews, averageStar } = getReviewSummaryStats(summary);
            setTotalReviews(totalReviews);
            setAverageStar(averageStar.toFixed(1));
            res = res.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));//sorting
            //convert millisecond into text
            res = res.map(val => {
                val["createdAt"] = getReviewDateString(val["createdAt"]);
                return val;
            })
            setReviews(res);
            allReveiws = res;
        }).catch((e) => {
            setSnackMessage("get Review failed");
            setOpen(true);
        })
    }, [])

    const handleSubmit = () => {
        var raw = JSON.stringify({
            "userName": reviewerName ? reviewerName : "Anonymous",
            "userImage": null,
            "reviewStar": reviewStar,
            "reviewMessage": reviewermessage ? reviewermessage : "NA"
        });

        var requestOptions = {
            method: 'POST',
            body: raw,
            headers: { "Content-Type": "application/json" }
        };
        fetch("https://ranjini-portfolio.onrender.com/reviews", requestOptions).then(() => {
            let data = JSON.parse(raw)
            data["createdAt"] = getReviewDateString(new Date().toISOString());
            reviews.unshift(data)
            let summary = getReviewSummary(reviews);
            setReviewData(summary);
            let { totalReviews, averageStar } = getReviewSummaryStats(summary);
            setTotalReviews(totalReviews);
            setAverageStar(averageStar.toFixed(1));
            setReviews(reviews);
            allReveiws = reviews;

            setSnackMessage("Review Added Succesfully!");
            setOpen(true);
            setReviewStart(0);
            setReviewerName("");
            setReviewermessage("");
        }).catch(() => {
            setSnackMessage("Review Addition Failed!");
            setOpen(true);
        })
    }

    const handleCheckBox = (e, id) => {
        if (e.target.checked) checkedStarts.push(id);
        else { checkedStarts = checkedStarts.filter(val => val !== id); }
        if (checkedStarts.length)
            setReviews(allReveiws.filter(val => checkedStarts.indexOf(val.reviewStar) !== -1))
        else
            setReviews(allReveiws);
    }

    return (
        <Grid container sx={{ padding: { xs: "10vw 10vw", md: "2vw 7vw" } }}>
            <Grid className="title" sx={{ marginBottom: { xs: "5vh", md: "5vh" } }}>MAKEUP ARTIST REVIEWS</Grid>
            <Grid container style={{ justifyContent: "space-between", marginBottom: "10px" }}>
                <Grid item xs={12} md={5} style={{ border: "1px solid lightgrey", padding: "20px", borderRadius: "10px" }}>
                    <Grid container style={{ margin: "10px 0px" }}>
                        <Grid item xs={8} style={{ display: "flex", fontSize: "17px", fontWeight: 400 }}>Rating Distribution</Grid>
                        <Grid item xs={4} style={{ marginTop: "-5px" }}>
                            <Grid container style={{ justifyContent: "flex-end" }}>
                                <span style={{ padding: "5px", alignItems: "center", display: "flex", borderRadius: "5px",backgroundColor: theme.palette["review"+(Math.floor(averageStar)?Math.floor(averageStar):1)].main, color: theme.palette["review"+(Math.floor(averageStar)?Math.floor(averageStar):1)].contrastText }}>
                                    <GradeIcon />
                                    <span style={{ marginLeft: "5px", marginBottom: "2px", marginRight: "3px" }}>{averageStar}</span>
                                </span>
                            </Grid>
                            <Grid container style={{ justifyContent: "flex-end", marginTop: "5px" }}> {totalReviews} reviews</Grid>
                        </Grid>
                    </Grid>
                    {reviewdata.map((val,idx) =><React.Fragment>
                        <Grid container sx={{ alignItems: "center",display:{md:"flex",xs:"none"} }} key={idx+"first"}>
                            <Checkbox color={"secondary"} style={{ paddingLeft: "0px" }} onClick={(e) => handleCheckBox(e, val.id)} />
                            <span>{val.id}</span>
                            <GradeIcon style={{ fontSize: "17px", marginTop: "2px", marginLeft: "5px" }} />
                            <LinearProgress color={"review" + val.id} style={{ width: "60%", height: "12px", borderRadius: "5px", marginLeft: "10px", marginRight: "13px", marginTop: "4px" }} variant="determinate" value={val.progress} />
                            <span style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>{val.total} reviews</span>
                        </Grid>
                        <Grid container sx={{ alignItems: "center",display:{md:"none",xs:"flex"} }} key={idx+"second"}>
                        <Checkbox color={"secondary"} style={{ paddingLeft: "0px" }} onClick={(e) => handleCheckBox(e, val.id)} />
                        <span>{val.id}</span>
                        <GradeIcon style={{ fontSize: "17px", marginTop: "2px", marginLeft: "5px" }} />
                        <LinearProgress color={"review" + val.id} style={{ width: "60%", height: "12px", borderRadius: "5px", marginLeft: "10px", marginRight: "13px", marginTop: "4px" }} variant="determinate" value={val.progress} />
                        <span style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>{val.total} </span>
                    </Grid>
                    </React.Fragment>
                    )}
                </Grid>
                <Grid  item xs={12} md={6} sx={{display:{xs:"none",md:"flex"}}} style={{ border: "1px solid lightgrey", padding: "20px", borderRadius: "10px", flexDirection: "column", justifyContent: "space-between" }}>
                    <Grid container>
                        <span>Review Gowdhami Makeover Artistry</span>
                    </Grid>
                    <Grid container>
                        {
                            <Rating onChange={(e) => { setReviewStart(Number(e.target.value)) }} name="size-large" size="large" />
                        }
                    </Grid>
                    <Grid container>
                        <TextareaAutosize
                            value={reviewermessage}
                            onChange={(e) => setReviewermessage(e.target.value)}
                            aria-label="Tell us about your experience"
                            minRows={8}
                            placeholder="Tell us about your experience"
                            style={{ width: "100%", padding: "15px", borderColor: "lightgrey", borderRadius: "5px" }}
                        />
                    </Grid>
                    <Grid container style={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Grid item>
                            <Input value={reviewerName}
                                onChange={(e) => setReviewerName(e.target.value)} disableUnderline={true} style={{ fontSize: "14px", height: "40px", border: "1px solid lightgrey", borderRadius: "5px", padding: "10px" }} id="name" placeholder="Enter your name" />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary" style={{ padding: "7px 15px" }} onClick={handleSubmit}> SUBMIT REVIEW</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {reviews.slice(0, numReviewsDisplayed).map((val,idx) =>
                <Grid container key={idx} style={{ border: "1px solid lightgrey", margin: "10px 0px", padding: "20px", borderRadius: "10px" }} >
                    <Grid container style={{ marginBottom: "10px" }} >
                        <Grid item><AccountCircleIcon style={{ color: "lightgrey", fontSize: "60px" }} /></Grid>
                        <Grid item style={{ margin: "8px 10px" }}>
                            <Grid container>
                                <Grid item>{val.userName}</Grid>
                                <Grid item style={{ marginLeft: "5px" }}>
                                    <Grid style={{ padding: "3px", marginRight: "5px", alignItems: "center", display: "flex", borderRadius: "5px", backgroundColor: theme.palette["review"+val.reviewStar].main, color: theme.palette["review"+val.reviewStar].contrastText }}>
                                        <GradeIcon style={{ fontSize: "16px" }} />
                                        <span style={{ marginLeft: "5px", fontSize: "12px", marginRight: "3px" }}>{val.reviewStar}</span>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container style={{ color: "grey", fontSize: "14px" }}>{val.createdAt}</Grid>
                        </Grid>
                    </Grid>
                    <Grid container style={{ textAlign: "start" }}>{val.reviewMessage}</Grid>
                </Grid>
            )}
            {/* Show the "see more" button if there are more reviews to display */}
            <Grid key="seemore" container style={{ justifyContent: "center", marginTop: "15px" }}>{numReviewsDisplayed < reviews.length && (
                <Button color="secondary" onClick={handleSeeMore}>See more <ArrowDownwardIcon style={{ fontSize: "18px", margin: "0px 5px" }} /></Button>
            )}
            </Grid>
            <Grid key="reviewBox" item xs={12} md={6} sx={{display:{xs:"flex",md:"none"}}} style={{marginTop:"15px",border: "1px solid lightgrey", padding: "20px", borderRadius: "10px", flexDirection: "column", justifyContent: "space-between" }}>
                    <Grid container>
                        <span>Review Gowdhami Makeover Artistry</span>
                    </Grid>
                    <Grid container style={{marginTop: "10px",marginBottom: "10px",justifyContent: "center"}}>
                        {
                            <Rating onChange={(e) => { setReviewStart(Number(e.target.value)) }} name="size-large" size="large" />
                        }
                    </Grid>
                    <Grid container>
                        <TextareaAutosize
                            value={reviewermessage}
                            onChange={(e) => setReviewermessage(e.target.value)}
                            aria-label="Tell us about your experience"
                            minRows={8}
                            placeholder="Tell us about your experience"
                            style={{ width: "100%", padding: "15px", borderColor: "lightgrey", borderRadius: "5px" }}
                        />
                    </Grid>
                    <Grid container style={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Grid item style={{width:"100%"}}>
                            <Input value={reviewerName}
                                onChange={(e) => setReviewerName(e.target.value)} disableUnderline={true} style={{ fontSize: "14px", height: "40px", border: "1px solid lightgrey", borderRadius: "5px", padding: "10px" ,marginTop: "18px",marginBottom: "18px",width: "100%"}} id="name" placeholder="Enter your name" />
                        </Grid>
                        <Grid item style={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
                            <Button variant="contained" color="secondary" style={{ padding: "7px 15px" }} onClick={handleSubmit}> SUBMIT REVIEW</Button>
                        </Grid>
                    </Grid>
                </Grid>
            <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
                <Alert severity={/fail/i.test(snackMessage) ? "error" : "success"} sx={{ width: '100%' }}>
                    {snackMessage}
                </Alert>
            </Snackbar>

        </Grid>
    )
}

export default Review;