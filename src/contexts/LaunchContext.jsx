import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import API from '../services/api';

const initialState = {
  launches: [],
  filteredResults: [],
  filterLaunchResults: () => {},
  filterResultsByDate: () => {},
};

const LaunchContext = React.createContext(initialState);

function LaunchProvider({ children }) {
  const [launchResult, updateLaunchResults] = React.useState([]);
  const [filteredResults, updateFilteredResults] = React.useState([]);

  useEffect(() => {
    const launches = API.getAllLaunches();
    launches
      .then((data) => updateLaunchResults(data));
  }, []);

  const filterLaunchResults = (filter) => {
    let upcomingLaunches; let pastLaunches; let successfulLaunches;
    switch (filter) {
      case 'Upcoming':
        upcomingLaunches = launchResult.filter((launches) => launches.upcoming !== false);
        updateFilteredResults(upcomingLaunches);
        break;
      case 'Past':
        pastLaunches = launchResult.filter((launches) => launches.upcoming !== true);
        updateFilteredResults(pastLaunches);
        break;
      case 'Successful':
        successfulLaunches = launchResult.filter((launches) => launches.launch_success === true);
        updateFilteredResults(successfulLaunches);
        break;
      default:
        updateFilteredResults([]);
    }
  };

  const filterResultsByDate = (startDate, endDate) => {
    const getLaunchesFromRange = launchResult.filter(
      (launches) => (startDate / 1000) < launches.launch_date_unix
      && (endDate / 1000) > launches.launch_date_unix,
    );
    updateFilteredResults(getLaunchesFromRange);
  };

  return (
    <LaunchContext.Provider
      value={{
        launchResult,
        filteredResults,
        filterLaunchResults,
        filterResultsByDate,
      }} >
      {children}
    </LaunchContext.Provider>
  );
}

LaunchProvider.propTypes = {
  children: PropTypes.any,
};

export {
  LaunchProvider,
  LaunchContext,
};
