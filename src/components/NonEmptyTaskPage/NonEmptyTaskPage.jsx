import React from 'react'
import TaskBlock from '../TaskBlock/TaskBlock';

const NonEmptyTaskPage = (props) => {
    return (
        <div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: 70,
                marginBottom: 50
            }}>
            {props.tasks.map(task => <TaskBlock clickedDelete={() => props.clickedDelete(task.id)} key={task.timeEntered} {...task} />)}
            </div>
        </div>
    )
}

export default NonEmptyTaskPage
