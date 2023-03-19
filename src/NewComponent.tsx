import React from 'react';
import {CarType, StudentType} from './App';

type NewComponentPropsType = {
    students: StudentType[],
    cars: Array<CarType>
}
export const NewComponent = (props: NewComponentPropsType) => {
    const studentsList = props.students.map(s => (
        <li key={s.id}>{`${s.name} ${s.age} years old`}</li>
    ))

    const carItems = props.cars.map((c, index) => (
        <tr key={index+1}>
            <td>{c.model}</td>
            <td>{c.manufacturer}</td>
        </tr>
    ))

    return (
        <>
        <ul>{studentsList}</ul>
            <table>
                <tr>
                    <th>Model</th>
                    <th>Manufacturer</th>
                </tr>
                {carItems}
            </table>
        </>
    )
}