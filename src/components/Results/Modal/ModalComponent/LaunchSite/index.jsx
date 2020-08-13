import React from 'react';
import PropTypes from 'prop-types';
import NestedValues from '../NestedValues/index.jsx';

export default function LaunchSite(props) {
  return (
    <li> <strong>  Launch site</strong>: <br />
      {props.launchDetails.launch_site
        ? Object.entries(props.launchDetails.launch_site).map((siteDetails) => (
          <NestedValues key={siteDetails[0]} item={siteDetails} />
        )) : null
      }
    </li>
  );
}

LaunchSite.propTypes = {
  launchDetails: PropTypes.object,
};
