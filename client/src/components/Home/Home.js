import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';


import { getPosts, getPostsBySearch } from '../../actions/posts'
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
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    useEffect(() =>{
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const searchPost = () => {
        if(search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            history.push(`/posts/search?searchQuery=${search || "none" }&tags=${tags.join(',')}`)
        } else {
            history.push('/');
        }
    }

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            searchPost();
        }
    }

    const handleAdd = (tag) => setTags([...tags, tag]);

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    return(
        <Grow in>
        <Container maxWidth="lg" style={{marginTop: '140px'}}>
          <Grid className={classes.content} container justify="space-around" alignItems="stretch" spacing={3} className={classes.gridContainer}>
              <Grid className={classes.post} item xs={12} sm={7} md={8}>
                  <Posts setCurrentId={setCurrentId}/>
              </Grid>
              <Grid className={classes.form} item xs={12} sm={5} md={4}>
                <AppBar className={classes.appBarSearch} position="static" color="inherit">
                    <TextField name="search" variant="outlined" label="Search Crafts" fullWidth value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <ChipInput style={{margin: '10px 0'}} value={tags} onAdd={handleAdd} onDelete={handleDelete} label="Search Tags" variant="outlined"/>
                    <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                </AppBar>
                  <Form currentId={currentId} setCurrentId={setCurrentId}/>
                  <Paper className={classes.pagination} elevation={6}>
                    <Pagination />
                  </Paper>
              </Grid>
              
          </Grid>
        </Container>
      </Grow>
    )
        
    
};

export default Home;