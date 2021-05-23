import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getPosts } from '../../actions/posts'
import useStyles from './styles';
import Pagination from '../Pagination';
import Posts from '../Posts/Posts';
import Form from '../Form/Form'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {

    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch();
    const classes = useStyles();
    

    useEffect(() =>{
        dispatch(getPosts());
    }, [currentId, dispatch]);
    
    return(
        <Grow in>
        <Container>
          <Grid className={classes.content} container justify="space-around" alignItems="stretch" spacing={3}>
              <Grid className={classes.post} item xs={12} sm={6}>
                  <Posts setCurrentId={setCurrentId}/>
              </Grid>
              <Grid className={classes.form} item xs={12} sm={6} >
                  <Form currentId={currentId} setCurrentId={setCurrentId}/>
                  <Paper elevation={6}>
                    <Pagination />
                  </Paper>
              </Grid>
              
          </Grid>
        </Container>
      </Grow>
    )
        
    
};

export default Home;