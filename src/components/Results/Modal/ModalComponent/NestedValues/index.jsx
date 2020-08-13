import React from 'react';
import PropTypes from 'prop-types';

export default function NestedValues(props) {
  return (
    <div key={props.item}>
      {props.flag === 'orbit_params'
        ? '----'
        : '-'
      } {props.item[0]}:
      {props.item[0] === 'flickr_images'
        ? props.item[1].map((item, key) => (
          <span key={key}>
            {item}
            {item.length > 1 ? ',' : null} <br/>
          </span>
        ))
        : props.item[1] || 'null' }
    </div>
  );
}

NestedValues.propTypes = {
  item: PropTypes.array,
  flag: PropTypes.string,
};
