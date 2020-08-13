import React from 'react';
import PropTypes from 'prop-types';
import ModalComponent from './ModalComponent/index.jsx';

export default function ModalFn(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalComponent
      modalIsOpen={modalIsOpen}
      openModal={openModal}
      closeModal={closeModal}
      launchDetails={props.launchDetails}
    />
  );
}

ModalFn.propTypes = {
  launchDetails: PropTypes.object,
};
