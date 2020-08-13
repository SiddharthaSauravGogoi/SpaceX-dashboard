import React from 'react';
import PropTypes from 'prop-types';
import NestedValues from '../NestedValues/index.jsx';

export default function Links(props) {
  return (
    <li> <strong> Links </strong>:
      {props.launchDetails.links
        ? Object.entries(props.launchDetails.links).map((item) => (
          <NestedValues key={item[0]} item={item} />
        )) : null}
    </li>
  );
}

Links.propTypes = {
  launchDetails: PropTypes.object,
};
