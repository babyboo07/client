import { Fab, Grid } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Header from "../Layout/Header";
import { Box } from "@mui/system";
import CardYoutube from "../Shared/Card";

function Home() {
  return (
    <>
      <Header />
      <div>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <div className="pt-2 ps-2">
            <Fab variant="extended" size="small" color="default">
              All
            </Fab>
            <Fab className="ms-2" variant="extended" size="small" color="default">
              <FastfoodIcon sx={{ mr: 1 }} />
              Food
            </Fab>
            <Fab className="ms-2" variant="extended" size="small" color="default">
              <VideogameAssetIcon sx={{ mr: 1 }} />
              Game
            </Fab>
            <Fab className="ms-2" variant="extended" size="small" color="default">
              <MusicNoteIcon sx={{ mr: 1 }} />
              Music
            </Fab>
          </div>
        </Box>
        <hr />
        <Grid container spacing={1} className="ps-5">
          {new Array(20).fill(null).map((_, index) => (
            <Grid item key={index}>
                <CardYoutube />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Home;
