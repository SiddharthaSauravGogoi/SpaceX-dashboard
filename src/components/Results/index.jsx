import React from 'react';
import LaunchDetails from './Modal/index.jsx';
import { LaunchContext } from '../../contexts/LaunchContext.jsx';
import spinner from '../../assets/spinner.gif';

export default function Results() {
  const {
    launchResult,
    filteredResults,
  } = React.useContext(LaunchContext);

  const renderContent = () => {
    if (!launchResult.length) return <img src={spinner} alt="spinner" />;
    return launchResult.map((launchDetails) => (
      <LaunchDetails
        launchDetails={launchDetails}
        key={launchDetails.flight_number} />
    ));
  };

  return (
    <div className="launch-result">
      {filteredResults.length
        ? filteredResults.map((launchDetails) => (
          <LaunchDetails
            launchDetails={launchDetails}
            key={launchDetails.flight_number}
          />
        ))
        : renderContent()}
    </div>
  );
}
