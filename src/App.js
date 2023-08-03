import './App.css';
import {Container, Grid, Typography} from "@mui/material";

function App() {
  return (
    <Container className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>
            MessageForm
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Messages
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
