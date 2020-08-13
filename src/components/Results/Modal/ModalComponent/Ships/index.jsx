import React from 'react';
import PropTypes from 'prop-types';

export default function Ships(props) {
  return (
    <li> <strong> Ships </strong>:
      {props.launchDetails.ships.length ? props.launchDetails.ships.map((ships) => (
        <span key={ships}>
          {ships || ' null'}{ships.length > 1 ? ',' : null}
        </span>
      )) : ' null'}
    </li>
  );
}

Ships.propTypes = {
  launchDetails: PropTypes.object,
};
