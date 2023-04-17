import * as React from "react";
import { Grid } from "@mui/material";

export default function Portfolio() {
  return (
    <Grid container sx={{ padding: {xs:"10vw 10vw",md:"2vw 7vw"} }}>
        <Grid className="title" sx={{marginBottom:{xs:"5vh",md:"5vh"}}}>MAKEUP ARTIST PORTFOLIO</Grid>
        <Grid container sx={{ width: "100vw" }} spacing={6}>
        {itemData.map((item) => (
          <Grid item key={item.img} xs={12} sm={6} md={4} lg={3}>
            <img className="portfolioimg" src={`${item.img}`} />
          </Grid >
        ))}
        </Grid>
    </Grid>
  );
}

const itemData = [
  {
    img: "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    img: "https://media.istockphoto.com/id/183250844/photo/wedding-ring-henna-hands.jpg?s=612x612&w=0&k=20&c=IGO6rVsYXDz1uBCUDWpGngiBy33EFv7jWtSi6iYWXfw=",
  },
  {
    img: "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwYnJpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    img: "https://www.theweddingfocus.com/wp-content/uploads/2022/05/getting-ready-bride-face-closeup-look-with-maang-tikka-nath-629x1024.jpg",
  },
  {
    img: "https://images.unsplash.com/photo-1594140700520-8afea3283e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJyaWRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1628917749170-f6747418ffce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxicmlkYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1610276347233-2ab70fc71da8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    img: "https://media.istockphoto.com/id/172852413/photo/the-beauty-of-the-indian-woman.jpg?s=612x612&w=0&k=20&c=OINaDdVhocyxDaAKDZ-lUIy3W_np4CQD3B39_NyvsDE=",
  },
  {
    img: "https://images.pexels.com/photos/5856078/pexels-photo-5856078.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    img: "https://images.pexels.com/photos/15181108/pexels-photo-15181108.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    img: "https://images.pexels.com/photos/13162813/pexels-photo-13162813.jpeg?auto=compress&cs=tinysrgb&w=600",
    
  },
  {
    img: "https://images.pexels.com/photos/15698711/pexels-photo-15698711.jpeg?auto=compress&cs=tinysrgb&w=600",
    
  },
];