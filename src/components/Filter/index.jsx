import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { LaunchContext } from '../../contexts/LaunchContext.jsx';

export default function Filter() {
  const [selectedValue, updateSelectedValue] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const {
    filterResultsByDate,
    filterLaunchResults,
  } = React.useContext(LaunchContext);

  const getFilterOption = (event) => {
    updateSelectedValue(event.target.value);
    filterLaunchResults(event.target.value);
  };

  useEffect(() => {
    if (startDate && endDate) {
      filterResultsByDate(startDate.getTime(), endDate.getTime());
    }
  }, [startDate, endDate]);

  return (
    <div className="filter-section">

      <div className="filter-wrapper">
        <div className="filer-indicator"> Select Filter</div>
        <select
          value={selectedValue}
          onChange={getFilterOption}
        >
          <option value="All">All results</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Past">Past</option>
          <option value="Successful">Successful</option>
        </select>
      </div>
      <div className="date-wrapper">
        <div className="datepicker-input-wrapper">
          <div>Start Date</div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
        </div>
        <div className="datepicker-input-wrapper">
          <div>End Date</div>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
      </div>
    </div>
  );
}
