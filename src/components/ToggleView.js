import React, { useContext } from 'react';
import classnames from 'classnames';
import { CalendarContext } from '../contexts/CalendarContext';

export default function ToggleView() {
  const { currentView, setCurrentView } = useContext(CalendarContext);
  function toggleActive(e) {
    setCurrentView(e.target.innerHTML.toLowerCase());
  }
  return (
    <div className='toggleView'>
      <button
        className={classnames('toggleView-btn', {
          active: currentView === 'day'
        })}
        onClick={toggleActive}>
        Day
      </button>
      <button
        className={classnames('toggleView-btn', {
          active: currentView === 'week'
        })}
        onClick={toggleActive}>
        Week
      </button>
      <button
        className={classnames('toggleView-btn', {
          active: currentView === 'month'
        })}
        onClick={toggleActive}>
        Month
      </button>
      <button
        className={classnames('toggleView-btn', {
          active: currentView === 'year'
        })}
        onClick={toggleActive}>
        Year
      </button>
    </div>
  );
}
