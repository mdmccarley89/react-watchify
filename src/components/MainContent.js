import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PosterGrid from "./PosterGrid";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(2),
  },
}));

export default function MainContent({ mediaItems, onPosterClick }) {
  const classes = useStyles();

  return (
    <Grid className={classes.main} item xs={7}>
      <PosterGrid mediaItems={mediaItems} onPosterClick={onPosterClick} />
    </Grid>
  );
}

MainContent.propTypes = {
  mediaItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onPosterClick: PropTypes.func.isRequired
};