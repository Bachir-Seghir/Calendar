import React, { useCallback, useContext } from 'react';
import DaysName from './DaysName';
import Days from './Days';
import moment from 'moment';
import classnames from 'classnames';
import { CalendarContext } from '../contexts/CalendarContext';

export default function Month({ monthProp }) {
  const { month, year, currentView, setMonth, setCurrentView } = useContext(
    CalendarContext
  );
  const monthObj = currentView === 'month' ? month : monthProp;

  const handleViewChange = useCallback(() => {
    if (currentView === 'year') {
      setMonth(momentMonth.month());
      setCurrentView('month');
    }
  }, [currentView]);

  const momentMonth =
    typeof monthObj === 'object'
      ? monthObj
      : moment()
          .year(year)
          .month(monthObj);

  return (
    <div
      className={classnames('month', `monthView--${currentView}`)}
      onDoubleClick={handleViewChange}>
      {currentView === 'year' && (
        <span className='month-name'>{momentMonth.format('MMMM')}</span>
      )}
      <DaysName />
      <Days month={momentMonth} />
    </div>
  );
}
