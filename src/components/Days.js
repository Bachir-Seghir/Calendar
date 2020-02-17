import React, { useState, useEffect } from 'react';
import Day from './Day';

export default function Days({ month }) {
  const [previewedDays, setPreviewedDays] = useState([]);
  const [otherDays, setOtherDays] = useState([]);

  useEffect(() => {
    const nextMonth = month.clone().add(1, 'months');

    const prevMonth = month.clone().subtract(1, 'months');

    const monthDays = new Array(month.daysInMonth())
      .fill()
      .map((d, i) => month.clone().date(i + 1));

    const prevMonthDays = new Array(month.startOf('month').day())
      .fill()
      .map((_, i) => prevMonth.clone().date(prevMonth.daysInMonth() - i))
      .reverse();
    const nextMonthDays = new Array(
      42 - prevMonthDays.length - monthDays.length
    )
      .fill()
      .map((_, i) => nextMonth.clone().date(i + 1));

    setOtherDays(prevMonthDays.concat(nextMonthDays));
    setPreviewedDays(prevMonthDays.concat(monthDays, nextMonthDays));
  }, [month]);

  return (
    <div className='days'>
      {previewedDays.map(day =>
        otherDays.includes(day) ? (
          <Day classN='other-day' month={month} day={day} key={day.unix()} />
        ) : (
          <Day classN='month-day' month={month} day={day} key={day.unix()} />
        )
      )}
    </div>
  );
}
