import React from 'react';
import { Modal, Button } from 'antd';
import { getMissionControlText } from '../../utils/helpers';
// import { useHistory } from 'react-router-dom';

const InstructionsModal = props => {
  // const {push} = useHistory();
  const {
    modalVisible,
    style,
    instructions,
    showOkButton = false,
    handleCancel,
    handleOk,
    hasRead,
    hasDrawn,
    hasWritten,
  } = props;

  // For when we're ready for checking the status of the weekly game
  // const joinSquad = e => {
  //   push('/child/join');
  // };

  return (
    <>
      <Modal
        className="instructions-modal"
        visible={modalVisible}
        keyboard={true}
        width={'70%'}
        onCancel={handleCancel}
        zIndex={2000}
        onOk={handleOk}
        cancelButtonProps={{ disabled: true }}
        footer={null}
        closeIcon={null}
      >
        <p style={style}>{instructions}</p>
        <Button onClick={handleCancel} className="accept-button">
          I Accept!!!
        </Button>
      </Modal>
    </>
  );
};

export default InstructionsModal;
