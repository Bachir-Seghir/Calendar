import React, { useContext } from 'react';
import moment from 'moment';
import Controls from './Controls';
import { CalendarContext } from '../contexts/CalendarContext';

function Header() {
  const { year, month, currentView } = useContext(CalendarContext);
  return (
    <div className='header'>
      {currentView === 'month' && (
        <span className='year-label'>{`${moment()
          .month(month)
          .format('MMMM')}  ${year}`}</span>
      )}
      {currentView === 'year' && <span className='year-label'>{year}</span>}
      <Controls />
    </div>
  );
}

export default Header;
