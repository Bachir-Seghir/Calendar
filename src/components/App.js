import React from 'react';
import Calendar from './Calendar';
import CalCtxProvider from '../contexts/CalendarContext';

const App = () => {
  return (
    <CalCtxProvider>
      <Calendar />
    </CalCtxProvider>
  );
};

export default App;
