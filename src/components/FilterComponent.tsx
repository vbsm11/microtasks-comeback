import React from 'react';
import {FilterType, MoneyType} from '../App';

type FilterComponentPropsType = {
    currentMoney: MoneyType[],
    onClickHandler: (filter: FilterType) => void
}

export const FilterComponent = (props: FilterComponentPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((m, index) => ((
                    <li key={index}>
                        <span>{m.banknots} </span>
                        <span>{m.value}</span>
                        <span>{m.number}</span>
                    </li>
                )))}
            </ul>
            <button onClick={() => props.onClickHandler('all')}>all</button>
            <button onClick={() => props.onClickHandler('RUBLS')}>ruble</button>
            <button onClick={() => props.onClickHandler('Dollars')}>dollar</button>
        </>
    )
}