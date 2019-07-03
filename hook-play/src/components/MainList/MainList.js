import React, { useState, useEffect } from 'react';
import { StyledMainList } from './styled-components';
import axios from 'axios';

import { StyledButton } from '../UI/styled-components';

import RemoveButton from '../UI/RemoveButton';
import Input from '../UI/Input';

const MainList = () => {
    const [list, updateList] = useState([]);

    const [newListItem, updateListItem] = useState('');

    useEffect(() => {
        getList();
    }, [list]);

    const getList = () => {
        axios.get('https://joke-subjects.firebaseio.com/list.json')
        .then(result => {
            updateList(result.data)
        })
        .catch(err => err);
    }

    const updateNewListItem = (e) => {
        const targetValue = e.target.value;

        updateListItem(targetValue);
    };

    const removeListItem = (e) => {
        const targetValue = e.target.id;
        let newListState = [ ...list ];
        newListState = newListState.filter(item => item.listItemId !== targetValue);

        updateList(newListState);
    }

    const addItem = () => {
        let newListState = [ ...list ];

        const newListObject = {
            listItemValue: newListItem,
            listItemId: newListItem,
            listItemChecked: false
        }

        newListState = newListState.concat(newListObject);

        updateList(newListState);
    }

    const renderList = (list) => {
        return list.map((item, idx) => {
            return (
            <div key={item.listItemValue + idx}>
                <div>{item.listItemValue}</div>
                <RemoveButton
                    hoverColor="none"
                    backgroundColor="none"
                    id={item.listItemId}
                    onRemove={removeListItem}
                >
                    Remove
                </RemoveButton>
            </div>
            )
        });
    };

    return (
        <StyledMainList>
            <h1>Joke Subjects</h1>
            {renderList(list)}
            <div className="addItem">
                <h2>Add a Joke Subject to the List</h2>
                <Input onChange={updateNewListItem} value={newListItem} />
                <StyledButton
                    className="addButton"
                    onClick={addItem}
                    backgroundColor="#34bbbb"
                    hoverColor="#23a9af"
                >
                    Add
                </StyledButton>
            </div>
        </StyledMainList>
    );
};

export default MainList;