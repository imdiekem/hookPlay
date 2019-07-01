import styled from 'styled-components';

export const StyledButton = styled.div`
    padding: 10px 15px;
    color: #fff;
    border-radius: 3px;
    background-color: ${props => props.backgroundColor || '#333'};
    transition: all 0.1s;
    text-align: center;

    :hover {
        background-color: ${props => props.hoverColor || '#000'};
        cursor: pointer;
    }
`