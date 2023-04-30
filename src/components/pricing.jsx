import { Grid } from "@mui/material";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const prices = [
  { name: "Bridal Makeup", price: "28,000" },
  {
    name: "Mehendi Makeup",
    price: "23,000",
  },
  { name: "Party Makeup", price: "12,000" },
];
const Pricing = () => {
  const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
  return (
    <Grid ref={ref} container style={{ backgroundColor: "#f140721f" }} id="PRICING">
      <Grid container style={{ display: "flex", justifyContent: "center" }} sx={{color:"secondary.main",marginTop:{xs:"45px",md:"60px"},marginBottom:{xs:"35px"}}}>
      <motion.div
              animate={isInView  ? { opacity: 1 , scale: [0,1] } : { opacity: 0, scale: 0 }}
              transition={{ duration: 1,ease: "easeInOut" }}
            >
        <span
          style={{
            fontFamily: "Kaushan Script",
            fontSize: "48px"
          }}
        >
          Plans & Pricing{" "}
        </span>
        </motion.div>
      </Grid>
      <Grid container style={{ justifyContent: "center" }}>
      <motion.div
              animate={isInView  ? { opacity: 1 , scale: [0,0,1] } : { opacity: 0, scale: 0 }}
              transition={{ duration: 1.5,ease: "easeInOut" }}
            >
        <span
          style={{
            fontFamily: "Prata",
            fontSize: "48px",
            color: "#141414",
            textAlign:"center"
          }}
        >
          Choose your makeup plan
        </span>
        </motion.div>
      </Grid>
      <Grid container style={{ justifyContent: "center" }}>
        
      <motion.div
              animate={isInView  ? { opacity: 1 , scale: [0,0,0,0,1] } : { opacity: 0, scale: 0 }}
              transition={{ duration: 2,ease: "easeInOut" }}
            ><span
          style={{
            fontSize: "1rem",
            color: "#141414",
            marginTop: "25px",
            textAlign:"center"
          }}
        >
          With Gowdhami, You’ll not get only your Dream Makeup services but also
          at affordable price.
        </span>
        </motion.div>
      </Grid>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "45px",
          height: "100%",
          marginBottom:'35px'
        }}
      >
        {prices.map((val,idx) => (
          
          <Grid
          key={idx}
            item
            xs={10} md={5} lg={3} 
            style={{ 
                backgroundColor: "#FFFFFF", height: "80%",marginBottom:'50px',justifyContent: "center",display: "flex",flexDirection: "column",alignItems: "center" }}
          >
            <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}              
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
        >
            <p
              style={{
                color: "#f14072",
                fontSize: "24px",
                fontFamily: "Prata",
                margin: "0",
                paddingTop: "60px",
                height:'70px',
                
              }}
            >
              {val.name}
            </p>
            <p
              style={{
                color: "#141414",
                fontFamily: "Prata",
                fontSize: "50px",
                margin: "0",
                paddingBottom:'40px'
              }}
            >
              {val.price}
              <span
                style={{
                  color: "#141414",
                  fontFamily: "Prata",
                  fontSize: "30px",
                }}
              >
                ₹
              </span>
            </p>
            </motion.div>
          </Grid>          
        ))}
      </Grid>
    </Grid>
  );
};

export default Pricing;
