import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    callBack: (text: string) => void
}

export const FullInput = (props: FullInputPropsType) => {

    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.callBack(value)
        setValue('')
    }

    return (
        <div>
            <input value={value} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    )
}