import React from 'react';
import PropTypes from 'prop-types';
import NestedValues from '../NestedValues/index.jsx';

export default function Telemetry(props) {
  return (
    <li>
      <strong> Telemtry </strong>:
      <br />
      {props.launchDetails.telemetry
        ? Object.entries(props.launchDetails.telemetry).map((telemetry) => (
          <NestedValues key={telemetry[0]} item={telemetry} />
        )) : null
      }
    </li>
  );
}

Telemetry.propTypes = {
  launchDetails: PropTypes.object,
};
