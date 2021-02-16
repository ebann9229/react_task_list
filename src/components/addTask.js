import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description:'',
            time: '',
            category: '',
            errors: {}
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    } 

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const taskData = {
            title: this.state.title,
            category: this.state.category,
            description: this.state.description,
            time: this.state.time
        }
        const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        tasks.push(taskData);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.setState({
            loading: false,
            title: '',
            description:'',
            time: '',
            category: '',
            errors: {}
        });        
    }


    render() {
        const { loading, errors } = this.state;
        return (
            <Grid container className="form">
                <Grid item sm >
                    <ArrowBackIosIcon 
                        onClick={this.props.history.goBack}
                        className="backIcon" 
                        />
                    
                </Grid>
                <Grid item sm>
                       <Typography variant="h4" className="page_title">
                           New Task
                       </Typography>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            variant="standard"
                            id="title"
                            name="title"
                            type="text"
                            label="What are you planning?"
                            rows="2"
                            rowsMax="5"
                            className="text_field"
                            multiline={true}
                            helperText={errors.title}
                            error={errors.title ? true : false}
                            value={this.state.title}
                            onChange={this.handleChange}
                            fullWidth
                            />
                        <TextField
                            variant="standard"
                            id="category"
                            name="category"
                            type="text"
                            label="Category"
                            className="text_field"
                            helperText={errors.category}
                            error={errors.category ? true : false}
                            value={this.state.category}
                            onChange={this.handleChange}
                            fullWidth
                            select
                            >
                            <MenuItem value="Work">Work</MenuItem>
                            <MenuItem value="Music">Music</MenuItem>
                            <MenuItem value="Travel">Travel</MenuItem>
                            <MenuItem value="Study">Study</MenuItem>
                            <MenuItem value="Home">Home</MenuItem>
                            <MenuItem value="Shopping">Shopping</MenuItem>
                            <MenuItem value="Art">Art</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </TextField>
                        <TextField
                            variant="standard"
                            id="description"
                            name="description"
                            type="text"
                            label="Add Notes"
                            className="text_field"
                            color="primary"
                            helperText={errors.description}
                            error={errors.description ? true : false}
                            value={this.state.description}
                            onChange={this.handleChange}
                            fullWidth
                            />
                        <TextField
                            variant="standard"
                            required={true}
                            id="time"
                            name="time"
                            type="datetime-local"
                            className="text_field"
                            helperText={errors.time}
                            error={errors.time ? true : false}
                            value={this.state.time}
                            onChange={this.handleChange}
                            fullWidth
                            />
                        {errors.general && (
                            <p>{errors.general}</p>
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            className="button"
                            color="primary"
                            disabled={loading}
                            fullWidth
                            disableElevation={true}
                            >
                                Create
                                { loading && (
                                    <CircularProgress size={30} className="progress" />
                                )}
                            </Button>
                    </form>
                </Grid>
                <Grid item sm />
            </Grid>
        )
    }
}

export default AddTask;
