import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Fab, Typography, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SubjectIcon from '@material-ui/icons/Subject';
import Work from '@material-ui/icons/WorkOutline';
import Home from '@material-ui/icons/HomeOutlined';
import All from '@material-ui/icons/AllInbox';
import Music from '@material-ui/icons/HeadsetOutlined';
import Art from '@material-ui/icons/ColorLensOutlined';
import Study from '@material-ui/icons/LibraryAddOutlined';
import Shopping from '@material-ui/icons/ShoppingCartOutlined';
import Travel from '@material-ui/icons/FlightOutlined';
import Other from '@material-ui/icons/AllInboxOutlined'


const categoryIcons = [All,Work,Music,Travel,Study,Home,Shopping,Art,Other]
const categories = ["All", "Work", "Music", "Travel", "Study", "Home", "Shopping", "Art", "Other"]

const taskHome = () => {
        return (
            <div className="homepage">
            <SubjectIcon />
            <h1>Lists</h1>
            <Grid 
            className="tasks"
            container
            direction="row"
            spacing={2}
            >
            {categoryIcons.map((Category) => 
                <Grid 
                    item 
                    xs={6}
                    key={categoryIcons.indexOf(Category)} 
                >
                    <Card 
                        variant="outlined" 
                        className="category"
                        >
                        <Link to={{
                    pathname: '/tasks',
                    hash: `${categoryIcons.indexOf(Category)}`
                }}>
                
                        <CardContent className="content1">
                            <Category
                             variant="sharp"
                             color="primary" 
                             fontSize="large"
                             className={categories[categoryIcons.indexOf(Category)]} />     
                        </CardContent>
                        <CardContent className="content2">
                            <Typography variant="h6">
                                {categories[categoryIcons.indexOf(Category)]}
                            </Typography>
                        </CardContent>   
                        </Link> 
                    </Card> 
                </Grid>
                )}
                </Grid>
                <Fab 
                    color="primary"
                    size="medium"
                    variant="round"
                    elevation={1}
                    href="/new_task"
                    className="newTaskButton"
                ><AddIcon  color="inherit" />
                </Fab>
            </div>
        )
    }

export default taskHome;
