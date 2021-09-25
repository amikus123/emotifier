import React from 'react'
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import PostCreator from '../../../modules/PostCreator/PostCreator';

const Home = () => {
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  }))
  const classes = useStyles();

  return (
    <>
      <PostCreator/>
    </>
  )
}

export default Home
