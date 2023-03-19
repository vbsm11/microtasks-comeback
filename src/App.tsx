import React, {MouseEvent} from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {NewComponent} from './components/NewComponent';
import {Button} from './components/Button';

export type StudentType = {
    id: number,
    name: string,
    age: number
}

export type CarType = {
    manufacturer: string,
    model: string
}

function App() {

    // const topCars: CarType[] = [
    //     {manufacturer:'BMW', model:'m5cs'},
    //     {manufacturer:'Mercedes', model:'e63s'},
    //     {manufacturer:'Audi', model:'rs6'}
    // ]
    //
    //
    // const students: StudentType[] = [
    //     {id: 1, name: 'James', age: 8},
    //     {id: 2, name: 'Robert', age: 18},
    //     {id: 3, name: 'John', age: 28},
    //     {id: 4, name: 'Michael', age: 38},
    //     {id: 5, name: 'William', age: 48},
    //     {id: 6, name: 'David', age: 58},
    //     {id: 7, name: 'Richard', age: 68},
    //     {id: 8, name: 'Joseph', age: 78},
    //     {id: 9, name: 'Thomas', age: 88},
    //     {id: 10, name: 'Charles', age: 98},
    //     {id: 11, name: 'Christopher', age: 108}
    // ]

    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hi, I am 1st')
    // }
    //
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hi, I am 2nd')
    // }

    // const onClickHandler = (name:string) => {
    //     console.log(name)
    // }

    const button1Foo = (sub: string, age: number, city: string) => {
        console.log(sub, age, city)
    }

    const button2Foo = (sub: string) => {
        console.log(sub)
    }

    const button3Foo = () => {
        console.log('I am stupid button')
    }


    return (
        <div className={'App'}>
            {/*<Header titleForHeader={'New header'}/>*/}
            {/*<Body titleForBody={'New body'}/>*/}
            {/*<Footer titleForFooter={'New footer'}/>*/}

            {/*<NewComponent students={students} cars={topCars}/>*/}

            {/*<button onClick={(event) => onClickHandler('1st')}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={(event) => onClickHandler('2nd')}>MyYouTubeChanel-2</button>*/}

            <Button name={'MyYouTubeChanel-1'} callBack={() => button1Foo('1st', 21, 'Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => button2Foo('2nd')}/>
            <Button name={'StupidButton'} callBack={button3Foo}/>
        </div>
    );
}

export default App;
