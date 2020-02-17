import React, { useContext } from 'react';
import back from '../img/back.png';
import arrow from '../img/arrow.png';
import moment from 'moment';
import { CalendarContext } from '../contexts/CalendarContext';

export default function Controls() {
  const { currentView, year, setYear, month, setMonth } = useContext(
    CalendarContext
  );
  function yearControl(key, value) {
    switch (key) {
      case 'btn-prev':
        value--;
        break;
      case 'btn-next':
        value++;
        break;
      case 'btn-today':
        value = moment().year();
        break;
      default:
        break;
    }
    return value;
  }
  function monthControl(key, value, parentValue) {
    switch (key) {
      case 'btn-prev':
        if (value == 0) {
          value = 11;
          parentValue--;
        } else value--;
        break;
      case 'btn-next':
        if (value === 11) {
          value = 0;
          parentValue++;
        } else value++;
        break;
      case 'btn-today':
        value = moment().month();
        parentValue = moment().year();
        break;
      default:
        break;
    }
    return [value, parentValue];
  }
  function handleClick(e) {
    const target = e.target.tagName === 'IMG' ? e.target.parentNode : e.target;

    switch (currentView) {
      case 'year':
        setYear(yearControl(target.className, year));
        break;
      case 'month':
        const [value, parentValue] = monthControl(
          target.className,
          month,
          year
        );
        setMonth(value);
        setYear(parentValue);
        break;

      default:
        break;
    }
  }
  return (
    <div className='controls'>
      <button className='btn-prev' onClick={handleClick}>
        <img src={back} />
      </button>
      <button className='btn-today' onClick={handleClick}>
        Today
      </button>
      <button className='btn-next' onClick={handleClick}>
        <img src={arrow} />
      </button>
    </div>
  );
}
