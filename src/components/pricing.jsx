import { Grid } from "@mui/material";
const prices = [
  { name: "Bridal Makeup", price: "28,000" },
  {
    name: "Mehendi Makeup",
    price: "23,000",
  },
  { name: "Party Makeup", price: "12,000" },
];
const Pricing = () => {
  return (
    <Grid container style={{ backgroundColor: "#f140721f" }} id="PRICING">
      <Grid container style={{ display: "flex", justifyContent: "center" }} sx={{color:"secondary.main",marginTop:{xs:"45px",md:"60px"},marginBottom:{xs:"35px"}}}>
        <span
          style={{
            fontFamily: "Kaushan Script",
            fontSize: "48px"
          }}
        >
          Plans & Pricing{" "}
        </span>
      </Grid>
      <Grid container style={{ justifyContent: "center" }}>
        <span
          style={{
            fontFamily: "Prata",
            fontSize: "48px",
            color: "#141414",
          }}
        >
          Choose your makeup plan
        </span>
      </Grid>
      <Grid container style={{ justifyContent: "center" }}>
        <span
          style={{
            fontSize: "1rem",
            color: "#141414",
            marginTop: "25px",
          }}
        >
          With Gowdhami, You’ll not get only your Dream Makeup services but also
          at affordable price.
        </span>
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
                backgroundColor: "#FFFFFF", height: "80%",marginBottom:'50px' }}
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
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Pricing;
