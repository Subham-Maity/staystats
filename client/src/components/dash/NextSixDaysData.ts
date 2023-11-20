import React from 'react';

function NextSixDaysData() {
    const currentDate = new Date();

    const endOfWeek = new Date();
    endOfWeek.setHours(23, 59, 59, 999);
    endOfWeek.setDate(currentDate.getDate() - 6); // End of the week


    const thisWeekCheckIns = bookingData.filter((record:any) => {
        const checkInDate = new Date(record.checkInDate);
        return checkInDate <= currentDate && checkInDate >= endOfWeek;
    });

    return thisWeekCheckIns;
}

export default NextSixDaysData;