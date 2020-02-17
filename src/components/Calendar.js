import React, { useContext } from 'react';
import ToggleView from './ToggleView';
import Header from './Header';
import Year from './Year';
import Month from './Month';
import { CalendarContext } from '../contexts/CalendarContext';

export default function Calendar() {
  const { currentView } = useContext(CalendarContext);

  let View = undefined;
  switch (currentView) {
    case 'month':
      View = Month;
      break;

    case 'year':
      View = Year;
      break;

    default:
      break;
  }

  return (
    <>
      <ToggleView />
      <Header />
      <View />
    </>
  );
}
