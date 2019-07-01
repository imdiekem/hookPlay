import styled from 'styled-components';

export const StyledMainList = styled.div`
    box-sizing: border-box; 
    width: 600px;
    margin: 0 auto;
    background: #ffe4e1;
    padding: 30px 0;

    h1 {
        font-size: 2rem;
        margin-bottom: 50px;
    }

    div {
        display: flex;
        width: 350px;
        margin: 0 auto;
        font-size: 1rem;
    }

    div > div, div > .removeButton, div > input, div > .addButton {
        align-self: center;
        margin-bottom: 30px;
    }

    div > div, div > input {
        margin-right: 10px;
        flex-grow: 2;
    }

    div > .removeButton, .addItem > .addButton {
        display: inline-block;
        width: 100px;
        font-size: 0.8rem;
        padding: 5px;
    }

    .addItem > .addButton {
        flex-grow: 0;
    }
`;