import React, {ChangeEvent, useState} from 'react';

type InputPropsType = {
    value: string
    callBack: (value: string) => void
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.callBack(e.currentTarget.value)
    }

    return (
        <>
            <input value={props.value} onChange={onChangeHandler}/>
        </>
    )
}