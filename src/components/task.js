import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

const Task = (props) => {
    const task = props.task;
    return(
        <Card className="task" elevation={1}>
            <CardContent>
                <Typography variant="h5" className="taskTitle">
                    {task.title}
                </Typography>
                <Typography variant="body1">
                    {task.description}
                </Typography>
                <Typography variant="h6">
                    {task.time}
                </Typography>
            </CardContent>
            <CardContent>
                <DeleteIcon className="taskDeleteButton" variant="outlined" float="right" onClick={() => props.handleDelete(props.index)} color="primary" />
            </CardContent>
        </Card>
    )
}

export default Task;