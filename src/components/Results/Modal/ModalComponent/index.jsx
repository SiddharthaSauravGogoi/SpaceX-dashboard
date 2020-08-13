import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import NestedValues from './NestedValues/index.jsx';
import Rocket from './Rocket/index.jsx';
import Telemetry from './Telemetry/index.jsx';
import Links from './Links/index.jsx';
import Ships from './Ships/index.jsx';
import LaunchFailureDetails from './LaunchFailureDetails/index.jsx';
import LaunchSite from './LaunchSite/index.jsx';

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '50%',
    width: '80%',
  },
};

export default function ModalComponent(props) {
  return (
    <div className="launch-details-modal">
      <button onClick={props.openModal} className="modal-display-text">
        Flight No: {props.launchDetails.flight_number} <br />
        Mission Name: {props.launchDetails.mission_name}

      </button>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <div className="modal-header">
          <h3>Flight Number {props.launchDetails.flight_number}</h3>
          <div onClick={props.closeModal} style={{ cursor: 'pointer' }}>CLOSE</div>
        </div>

        <ul className="modal-body">
          <li>
            <strong> Crew </strong>: {props.launchDetails.crew ? props.launchDetails.crew : 'Null'}
          </li>
          <li>
            <strong> Details </strong>: {props.launchDetails.details}</li>
          <li>
            <strong> Flight No </strong>: {props.launchDetails.flight_number}
          </li>
          <li>
            <strong> Is tentative</strong>: {props.launchDetails.is_tentative ? 'true' : 'false'}
          </li>
          <li>
            <strong> Launch Date localtime </strong>: {props.launchDetails.launch_date_local}
          </li>
          <li>
            <strong> Launch Date UNIX time </strong>: {props.launchDetails.launch_date_unix}
          </li>
          <LaunchFailureDetails launchDetails={props.launchDetails} />
          <LaunchSite launchDetails={props.launchDetails} />
          <li> <strong> Launch success </strong>: {props.launchDetails.launch_success ? 'true' : 'false'} </li>
          <li> <strong> Launch Window </strong>: {props.launchDetails.launch_window}</li>
          <li> <strong> Launch Year </strong>: {props.launchDetails.launch_year}</li>
          <Links launchDetails={props.launchDetails}/>
          <li> <strong> Mission ID </strong>: {props.launchDetails.mission_id
            ? props.launchDetails.mission_id.map((missionId) => (
              <span key={missionId}> {missionId}</span>
            )) : null}
          </li>
          <li> <strong> Mission Name </strong>: {props.launchDetails.mission_name}</li>
          <Rocket launchDetails={props.launchDetails}/>
          <Ships launchDetails={props.launchDetails}/>
          <li>
            <strong> Static File Date UNIX time </strong>
            {props.launchDetails.static_fire_date_unix}
          </li>
          <li>
            <strong> Static File Date UTC time </strong>: {props.launchDetails.static_fire_date_utc}
          </li>
          <li> <strong>TBD </strong>: {props.launchDetails.tbd ? 'true' : 'false'}</li>
          <li> <strong> Tentative Max Precision </strong>:
          {props.launchDetails.tentative_max_precision}
          </li>
          <Telemetry launchDetails={props.launchDetails}/>
          <li> <strong> Timeline </strong>:
          {props.launchDetails.timeline
            ? Object.entries(props.launchDetails.timeline).map((timeline) => (
              <NestedValues key={timeline[0]} item={timeline}/>
            )) : null
          }
          </li>
          <li> <strong> Upcoming </strong> : {props.launchDetails.upcoming ? 'true' : 'false'}</li>
        </ul>
      </Modal>
    </div>
  );
}

ModalComponent.propTypes = {
  modalIsOpen: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  launchDetails: PropTypes.object,
  customStyles: PropTypes.object,
};
