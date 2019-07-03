import styled from 'styled-components';

export const StyledButton = styled.div`
    padding: 10px 15px;
    font-weight: bold;
    color: #fff;
    background-color: ${props => props.backgroundColor || '#333'};
    transition: all 0.1s;
    text-align: center;
    border-radius: 2px;

    :hover {
        background-color: ${props => props.hoverColor || '#000'};
        cursor: pointer;
    }
`

export const StyledInput = styled.input`
    border: 1px solid #efd4d1; 
    padding: 5px 10px;
    font-size: 1rem;
    background: #fff;

    :focus {
        outline: none;
    }
`