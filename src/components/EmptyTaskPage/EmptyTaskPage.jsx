import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const EmptyTaskPage = (props) => {
    return (
        <div>
          <div onClick={props.clicked}>
          <AddCircleIcon style={{
            fontSize: 50,
            cursor: 'pointer'
          }} />
          </div>
            <h4 style={{
              marginTop: 3
            }}>Please add your very first task.</h4>
          </div>
    )
}

export default EmptyTaskPage
