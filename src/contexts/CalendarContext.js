import React, { useState, createContext } from 'react';
import moment from 'moment';

export const CalendarContext = createContext();

const CalCtxProvider = props => {
  const [currentView, setCurrentView] = useState('month');
  const [month, setMonth] = useState(moment().month());
  const [year, setYear] = useState(moment().year());
  const [months, setMonths] = useState([]);

  return (
    <CalendarContext.Provider
      value={{
        month,
        setMonth,
        year,
        setYear,
        months,
        setMonths,
        currentView,
        setCurrentView
      }}>
      {props.children}
    </CalendarContext.Provider>
  );
};

export default CalCtxProvider;
