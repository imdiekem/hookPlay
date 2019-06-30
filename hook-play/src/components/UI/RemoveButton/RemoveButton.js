import React from 'react';

const RemoveButton = (props) => {
    const {
        onRemove,
        id
    } = props;

    return (
        <button id={id} onClick={onRemove}>Remove</button>
    )
};

export default RemoveButton;