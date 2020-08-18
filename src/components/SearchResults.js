import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    marginTop: 20,
    marginLeft: 30,
    maxWidth: 500,
    

    
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'flex',
    maxWidth: '100%',
    maxHeight: '100%',
  },

}));

export default function ComplexGrid({ image, title, overview, release_date,vote_average }) {
  const classes = useStyles();

  const baseUrl = "https://image.tmdb.org/t/p/original/"
       
  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="No Poster" src={`${baseUrl}${image}`} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {overview}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {release_date}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
  <Typography variant="subtitle1">{vote_average}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}