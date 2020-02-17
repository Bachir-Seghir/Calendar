import React, { useEffect, useContext } from 'react';
import Month from './Month';
import moment from 'moment';
import { CalendarContext } from '../contexts/CalendarContext';

export default function Year() {
  const { year, months, setMonths } = useContext(CalendarContext);
  useEffect(() => {
    const yearMonths = Array(12)
      .fill()
      .map((_, i) =>
        moment()
          .clone()
          .year(year)
          .months(i)
      );
    setMonths(yearMonths);
  }, [year]);

  return (
    <div className='months'>
      {months.map(month => (
        <Month key={month.format('MMMM')} monthProp={month} />
      ))}
    </div>
  );
}
