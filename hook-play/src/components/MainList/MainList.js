import React, { useState } from 'react';
import { StyledMainList } from './styled-components';

import { StyledButton } from '../UI/styled-components';

import RemoveButton from '../UI/RemoveButton';

const MainList = () => {
    const [list, updateList] = useState(
        [
            {
                listItemValue: "light bulb",
                listItemId: "light bulb",
                listItemChecked: false
            },
            {
                listItemValue: "bar",
                listItemId: "bar",
                listItemChecked: false
            }
        ]
    );

    const [newListItem, updateListItem] = useState('');

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
                    hoverColor="#d44141"
                    backgroundColor="#ff6666"
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
                <input onChange={updateNewListItem} value={newListItem} />
                <StyledButton className="addButton" onClick={addItem}>Add</StyledButton>
            </div>
        </StyledMainList>
    );
};

export default MainList;