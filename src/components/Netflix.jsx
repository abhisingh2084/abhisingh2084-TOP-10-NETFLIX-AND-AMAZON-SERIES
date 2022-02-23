import React from 'react';
import Card from './Card';
import Dataset from './Dataset';

const Netflix = () => {
    return (
        <Card
            key ={Dataset.id}
            imgsrc = {Dataset[1].imgsrc}
            Title = {Dataset[1].Title}
            sname = {Dataset[1].sname}
            link = {Dataset[1].link}
        />
    );

}
export default Netflix;