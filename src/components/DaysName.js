import React, { useContext } from 'react';
import moment from 'moment';
import { CalendarContext } from '../contexts/CalendarContext';

export default function DaysName() {
  const { currentView } = useContext(CalendarContext);

  return (
    <div className='days_name'>
      {moment
        .weekdaysShort()
        .map(name =>
          currentView === 'year' ? (
            <span key={name}>{name.slice(0, 1)}</span>
          ) : (
            <span key={name}>{name}</span>
          )
        )}
    </div>
  );
}
