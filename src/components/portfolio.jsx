import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { motion } from "framer-motion";

var displayRange = 8;
export default function Portfolio() {
  const [numPictureDisplayed, setNumPictureDisplayed] = useState(8);
  // Show the next 5 Photos when the "see more" button is clicked
  const handleSeeMore = () => {
    setNumPictureDisplayed(numPictureDisplayed + displayRange);
  };
  // Update the number of Photos displayed based on screen size
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
      displayRange = 4;
      setNumPictureDisplayed(4);
    }
    else if (screenWidth < 1200) {
      displayRange = 6;
      setNumPictureDisplayed(6);
    } else {
      displayRange = 8;
      setNumPictureDisplayed(8);
    }
  }, []);
  return (
    <Grid container sx={{ padding: { xs: "10vw 10vw", md: "2vw 7vw" } }} id="PORTFOLIO">
      <Grid className="title" sx={{ marginBottom: { xs: "5vh", md: "5vh" } }}>MAKEUP ARTIST PORTFOLIO</Grid>
      <Grid container sx={{ width: "100vw" }} spacing={6} >
        {itemData.slice(0, numPictureDisplayed).map((item) => (

          <Grid item key={item.img} xs={12} sm={6} md={4} lg={3} >
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}              
              animate={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1 }}
            >
              <img className="portfolioimg " src={`${item.img}`} />
            </motion.div>
          </Grid >

        ))}
      </Grid>

      {/* Show the "see more" button if there are more reviews to display */}
      <Grid container style={{ justifyContent: "center", marginTop: "15px" }}>{numPictureDisplayed < itemData.length && (
        <Button color="secondary" className="jumping-button" onClick={handleSeeMore}>See more <ArrowDownwardIcon style={{ fontSize: "18px", margin: "0px 5px" }} /></Button>
      )}
      </Grid>
    </Grid>
  );
}

const itemData = [
  {
img:"https://drive.google.com/uc?id=1LlsiJ7N698hXyIVzi2ZPDb9p5ziSg-9J" ,
 },
  {
    img: "https://drive.google.com/uc?id=1Lj6zK_wQXjtGAdLd58QQjlq6SKVutNHH",
  },
  {
    img: "https://drive.google.com/uc?id=1Ljj4IPlE_pAxsFgYRnS8AIQrz2pyBhG1",
  },
  {
    img: "https://drive.google.com/uc?id=1LtslXmO7va0SJxHzkKR4E8Dm61m1NAVK",
  },
  {
    img: "https://drive.google.com/uc?id=1JYMGpawI04M6SrL7Rrolvuqd2o3XiEq5",
  },
  {
    img: "https://drive.google.com/uc?id=1JviY2F4I7HZQahDJ6gPgDKEWquzKlPYK",
  },
  {
    img: "https://drive.google.com/uc?id=1LZF8ryHeDDbjnpHn7pbS-e9xwJopCCtv",
  },
  {
    img: "https://drive.google.com/uc?id=1M0GdphjnSvL-xFELCJJGpbi4ZbhmVxpx",
  },
  {
    img: "https://drive.google.com/uc?id=1KAsRQ-V5dvqSnURjzn2iLPDdttKrGRNG",
  },
  {
    img: "https://drive.google.com/uc?id=1LcsdWxpaGrnBA5cEBDOU1gMJmOB_hN26",
  },
  {
    img: "https://drive.google.com/uc?id=1JXmni_WoIbiWj2-1R0zb_zT1TyPLJhDQ",
  },
  {
    img: "https://drive.google.com/uc?id=1LW7vkY-9wjtH8D-QOPzK3PpGPkv_8euW", 
  },
];
