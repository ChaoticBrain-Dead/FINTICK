import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: 'white',
  text: 'white',
  textAlign: 'center',
}));

const Home = () => {
  return (
    <section style={{ margin: '20px', backgroundColor: 'black' }} id="about">
      <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: 'black' }}>
        <Grid container spacing={2} style={{ backgroundColor: 'black' }}>
          <Grid item xs={12} sm={6} style={{ backgroundColor: 'black' }}>
            <Item style={{ backgroundColor: 'black' }}>
              <h1 style={{ fontWeight: 'bold', margin: '22px', backgroundColor: 'black', marginLeft:'120px'}}>FINTICK✅ : Your New BFF</h1>
              <br></br>
              <Typography style={{ textAlign: 'justify', width: "100%", marginLeft: "auto", marginRight: "auto", fontFamily: 'serif', fontSize: '25px' }}>
                <ul style={{marginLeft:'200px'}}>
                <li>
                    <span style={{ 'color': '#41C9E2' }} >Feeling lost in financial lingo? </span>
                    <ul>
                      <li>
                        <span>Fintick speaks plain English, not Wall Street jargon.</span>
                      </li>
                    </ul>
                  </li>
                  <br></br>
                  <li>
                    <span style={{ 'color': '#41C9E2' }} >Tired of confusing spreadsheets? </span>
                    <ul>
                      <li>
                        <span>Fintick makes managing your money a breeze.</span>
                      </li>
                    </ul>
                  </li>
                  <br></br>
                  <li>
                    <span style={{ 'color': '#41C9E2' }} >Ready to ditch the bank fees? </span>
                    <ul>
                      <li>
                        <span>Fintick helps you save money, not spend it.</span>
                      </li>
                    </ul>
                  </li>
                  <br></br>
                  <li>
                    <span style={{ 'color': '#41C9E2' }} >Dreaming of a brighter financial future? </span>
                    <ul>
                      <li>
                        <span>Fintick is your personalized roadmap to get there.</span>
                      </li>
                    </ul>
                  </li>
                  <br></br>
                  <li>
                    <span style={{ 'color': '#41C9E2' }} >Just starting your financial journey? </span>
                    <ul>
                      <li>
                        <span>Fintick empowers you to make smart money moves.</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Item style={{ backgroundColor: 'black' }}>
              <img className="img-breathing" src='https://socialcry.com/wp-content/uploads/2024/03/My-first-design-1.png' style={{ width: '500px', height: '500px', borderRadius: '50px', boxShadow: '0 0 20px 5px #00FFFD' }} />
            </Item>
          </Grid> 
        </Grid>
      </Box>
    </section>
  );
}

export default Home;
