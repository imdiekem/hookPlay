import React, { useState, useEffect } from 'react';
import { StyledMainList } from './styled-components';
import axios from 'axios';

import { StyledButton } from '../UI/styled-components';

import RemoveButton from '../UI/RemoveButton';
import Input from '../UI/Input';

const MainList = () => {
    const [list, updateList] = useState({});

    const [newListItem, updateListItem] = useState('');

    useEffect(() => {
        getList();
    }, []);

    const getList = () => {
        axios.get('https://joke-subjects.firebaseio.com/list.json')
        .then(result => {
            let newList = { ...list };
            newList = { ...list, ...result.data };
            updateList(newList);
        })
        .catch(err => console.log(err));
    }

    const updateNewListItem = (e) => {
        const targetValue = e.target.value;

        updateListItem(targetValue);
    };

    const removeListItem = (e) => {
        const targetId = e.target.id;
        axios.delete(`https://joke-subjects.firebaseio.com/list/${targetId}.json`)
        .then(result => {
            const newList = { ...list };
            delete newList[targetId];
            updateList(newList);
        })
        .catch(err => console.log(err));
    }

    const addItem = () => {
        const newListObject = {
            listItemValue: newListItem,
            listItemId: newListItem,
            listItemChecked: false
        }

        axios.post('https://joke-subjects.firebaseio.com/list.json', newListObject)
        .then(result => {
            let {
                name
            } = result.data;

            let newList = { ...list };

            newList[name] = newListObject;

            updateList(newList);
        })
        .catch(err => console.log(err));
    }

    const renderList = (list) => {
        return Object.keys(list).map((key) => {
            return (
                <div key={key}>
                    <div>{list[key].listItemValue}</div>
                    <RemoveButton
                        hoverColor="none"
                        backgroundColor="none"
                        id={key}
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