import React from 'react';

const Date = ({date, showTime, showDate}) => {
    console.log('date', date);
    const theDate = new Date(date);

    const year = showDate ? `${(`0${theDate.getDate()}`).slice(-2) }/${ (`0${theDate.getMonth()+1}`).slice(-2) }/${theDate.getFullYear()}`:'';
    const time = showTime ? `${(`0${theDate.getHours()}`).slice(-2) }:${ (`0${theDate.getMinutes()}`).slice(-2)}`:'';

    const dateText = `${year} ${time}`;
    return (
        <span>{dateText}</span>
    );
}

export default Date;