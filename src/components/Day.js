import React, { useContext } from 'react';
import classnames from 'classnames';
import moment from 'moment';
import { CalendarContext } from '../contexts/CalendarContext';

export default function Day({ classN, day }) {
  const { currentView } = useContext(CalendarContext);
  return (
    <div
      //onDoubleClick={handleDayClick}
      className={classnames(
        'day',
        { 'month-day': classN === 'month-day' },
        { 'other-day': classN === 'other-day' },
        {
          'is-active':
            moment().format('YYYY-MM-DD') === day.format('YYYY-MM-DD') &&
            !(classN === 'other-day')
        },
        {
          'is-weekend':
            day.format('ddd') === 'Sun' || day.format('ddd') === 'Sat'
        }
      )}>
      <h4>
        {currentView === 'month' && day.date() === 1 && day.format('MMM')}{' '}
        {day.date()}
      </h4>
    </div>
  );
}
