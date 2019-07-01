import React from 'react';

import { StyledButton } from '../styled-components';

const RemoveButton = (props) => {
    const {
        onRemove,
        id,
        backgroundColor,
        hoverColor
    } = props;

    return (
        <StyledButton
            className="removeButton"
            backgroundColor={backgroundColor}
            hoverColor={hoverColor}
            id={id}
            onClick={onRemove}>{props.children}
        </StyledButton>
    )
};

export default RemoveButton;