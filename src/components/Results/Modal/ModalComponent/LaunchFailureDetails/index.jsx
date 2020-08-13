import React from 'react';
import PropTypes from 'prop-types';
import NestedValues from '../NestedValues/index.jsx';

export default function UTCDate(props) {
  return (
    <li>
      <strong> Launch Failure details </strong>: {props.launchDetails.launch_date_utc}
      {props.launchDetails.launch_failure_details
        ? Object.entries(props.launchDetails.launch_failure_details).map((failureDetails) => (
          <NestedValues key={failureDetails[0]} item={failureDetails} />
        )) : null
      }
    </li>
  );
}

UTCDate.propTypes = {
  launchDetails: PropTypes.object,
};
