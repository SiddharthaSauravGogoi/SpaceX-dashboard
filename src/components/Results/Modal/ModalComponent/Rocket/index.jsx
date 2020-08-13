import React from 'react';
import PropTypes from 'prop-types';
import NestedValues from '../NestedValues/index.jsx';

export default function Rocket(props) {
  return (
    <li>
      <strong> Rocket </strong>: <br />
      - rocket_id: {props.launchDetails.rocket.rocket_id} <br />
      - rocket_name: {props.launchDetails.rocket.rocket_name} <br />
      - rocket_type: {props.launchDetails.rocket.rocket_type} <br />
      {props.launchDetails.rocket.fairings ? <div>
      - fairings: <br />
      -- reused: {props.launchDetails.rocket.fairings.reused ? props.launchDetails.rocket.fairings.reused : 'null'} <br />
      -- recovery_attempt: {props.launchDetails.rocket.fairings.recovery_attempt ? props.launchDetails.rocket.fairings.recovery_attempt : 'null'} <br />
      -- recovered: {props.launchDetails.rocket.fairings.recovered ? props.launchDetails.rocket.fairings.recovered : 'null'} <br />
      -- ship: {props.launchDetails.rocket.fairings.ship ? props.launchDetails.rocket.fairings.ship : 'null'} <br />
      - first_stage: <br />
        -- cores: <br />
          --- block: {props.launchDetails.rocket.first_stage.cores[0].block ? props.launchDetails.rocket.first_stage.cores[0].block : 'null'} <br />
          --- core_serial: {props.launchDetails.rocket.first_stage.cores[0].core_serial ? props.launchDetails.rocket.first_stage.cores[0].core_serial : 'null'} <br />
          --- flight: {props.launchDetails.rocket.first_stage.cores[0].flight ? props.launchDetails.rocket.first_stage.cores[0].flight : 'null'} <br />
          --- gridfins: {props.launchDetails.rocket.first_stage.cores[0].gridfins ? props.launchDetails.rocket.first_stage.cores[0].gridfins : 'null'} <br />
          --- land_success: {props.launchDetails.rocket.first_stage.cores[0].land_success ? props.launchDetails.rocket.first_stage.cores[0].land_success : 'null'} <br />
          --- landing_intent: {props.launchDetails.rocket.first_stage.cores[0].landing_intent ? props.launchDetails.rocket.first_stage.cores[0].landing_intent : 'null'} <br />
          --- landing_type: {props.launchDetails.rocket.first_stage.cores[0].landing_type ? props.launchDetails.rocket.first_stage.cores[0].landing_type : 'null'} <br />
          --- landing_vehicle: {props.launchDetails.rocket.first_stage.cores[0].landing_vehicle ? props.launchDetails.rocket.first_stage.cores[0].landing_vehicle : 'null'} <br />
          --- legs: {props.launchDetails.rocket.first_stage.cores[0].legs ? props.launchDetails.rocket.first_stage.cores[0].legs : 'null'} <br />
          --- reused: {props.launchDetails.rocket.first_stage.cores[0].reused ? props.launchDetails.rocket.first_stage.cores[0].reused : 'null'} <br />
      - second_stage: <br />
        -- block: {props.launchDetails.rocket.second_stage.block} <br />
        -- payloads: <br />
        --- customers: <br />
          --- manufacturer:
              {props.launchDetails.rocket.second_stage.payloads[0].manufacturer} <br />
          --- nationality:
              {props.launchDetails.rocket.second_stage.payloads[0].nationality} <br />
          --- manufacturer:
              {props.launchDetails.rocket.second_stage.payloads[0].manufacturer} <br />
          --- norad_id:
              {props.launchDetails.rocket.second_stage.payloads[0].norad_id.length
                ? props.launchDetails.rocket.second_stage.payloads[0].norad_id.map((item, key) => (
                <span key={key}> {item}{props.launchDetails.rocket.second_stage.payloads[0].norad_id.length > 1 ? ',' : null}</span>
                )) : 'null'} <br />
          --- orbit: {props.launchDetails.rocket.second_stage.payloads[0].orbit} <br />
          --- orbit_params: <br />
          {Object.entries(props.launchDetails.rocket.second_stage.payloads[0].orbit_params)
            .map((item) => (
            <NestedValues key={item[0]} item={item} flag={'orbit_params'} />
            ))}
          --- payload_id:
                {props.launchDetails.rocket.second_stage.payloads[0].payload_id} <br />
          --- payload_mass_kg:
                {props.launchDetails.rocket.second_stage.payloads[0].payload_mass_kg} <br />
          --- payload_mass_lbs:
                {props.launchDetails.rocket.second_stage.payloads[0].payload_mass_lbs} <br />
          --- payload_type:
                {props.launchDetails.rocket.second_stage.payloads[0].payload_type} <br />
          --- reused:
                {props.launchDetails.rocket.second_stage.payloads[0].reused ? 'true' : 'false'} <br />
      </div> : null}
    </li>
  );
}

Rocket.propTypes = {
  launchDetails: PropTypes.object,
};
