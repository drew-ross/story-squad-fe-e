import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';

const EmojiCard = ({ emoji }) => {
  return (
    <div className="EmojiCard">
      <p>{emoji[0]}</p>
      <p>{emoji[1]}</p>
    </div>
  );
};

const EmojiFeedback = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [emojis, setEmojis] = useState([]);

  const onClick = () => {
    setModalVisible(true);
  };

  // get an object with count from emoji string to display as separate components
  useEffect(() => {
    console.log(props.emojis);
    const emojiArr = [...props.emojis];
    const emojiObj = {};
    const output = [];
    emojiArr.forEach(emoji => {
      if (!(emoji in emojiObj)) {
        emojiObj[emoji] = 0;
      }
      emojiObj[emoji] += 1;
    });
    for (const emoji in emojiObj) {
      output.push([emoji, emojiObj[emoji]]);
    }
    setEmojis(output);
    console.log(output);
  }, [props]);

  return (
    <div className="EmojiFeedback">
      <button onClick={onClick}>Feedback</button>
      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => setModalVisible(false)}
        footer={null}
        title={'Feedback from others'}
      >
        {emojis.length && emojis.map(emoji => <EmojiCard emoji={emoji} />)}
      </Modal>
    </div>
  );
};

export default EmojiFeedback;
