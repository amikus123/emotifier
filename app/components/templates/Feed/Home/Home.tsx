import React from 'react'
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const Home = () => {
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor:"red",
      width:"30rem",
      height:"30rem",
      marginLeft:"255px",
    },}))
  const classes = useStyles();

  return (
    <div>
      
    </div>
  )
}

export default Home
