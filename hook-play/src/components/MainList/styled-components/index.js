import styled from 'styled-components';

export const StyledMainList = styled.div`
    box-sizing: border-box; 
    width: 600px;
    margin: 20px auto 0;
    background: #ffe4e1;
    padding: 30px 0 50px;

    > div:not(:last-of-type) {
        border-bottom: 1px solid #f7d1cc;
    }

    h1 {
        font-family: 'Roboto Slab', serif;
        font-size: 2.3rem;
        font-weight: 400;
        text-transform: uppercase;
        color: #5a2a2a;
        margin-bottom: 70px;
    }

    div {
        display: flex;
        width: 350px;
        margin: 0 auto;
        font-size: 1.1rem;
    }

    div > div, div > .removeButton, div > input, div > .addButton {
        align-self: center;
        padding: 20px 0;
    }

    div > div {
        margin-right: 10px;
        flex-grow: 2;
        align-self: center;
    }

    div > input {
        margin-right: 20px;
        flex-grow: 1;
        padding: 5px 10px;
        color: #333;
    }

    div > .removeButton, .addItem > .addButton {
        display: inline-block;
        width: 100px;
        font-size: 0.8rem;
        padding: 5px;
    }

    div > .removeButton {
        color: #cc857d;
        
        :hover {
            color: #9c574f;
        }
    }

    .addItem {
        margin-top: 30px;
        flex-wrap: wrap;

        h2 {
            font-family: 'Roboto Slab', serif;
            font-size: 1.2rem;
            font-weight: 400;
            color: #5a2a2a;
            flex: 0 0 100%;
            margin-bottom: 30px;
            
        }
    }

    .addItem > .addButton {
        flex-grow: 0;
        width: 70px;
    }
`;