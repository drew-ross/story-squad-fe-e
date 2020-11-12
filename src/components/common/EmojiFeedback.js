import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';

const EmojiCard = ({ emoji }) => {
  return (
    <div className="EmojiCard">
      <span>{emoji[0]}</span>
      <span>{emoji[1]}</span>
    </div>
  );
};

const EmojiFeedback = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [emojis, setEmojis] = useState([]);

  const onClick = () => {
    setModalVisible(true);
  };

  // get an array of objects {emoji: count} from string to render EmojiCard components
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
        <div className="modal-content">
          {emojis.length &&
            emojis.map((emoji, i) => <EmojiCard key={i} emoji={emoji} />)}
        </div>
      </Modal>
    </div>
  );
};

export default EmojiFeedback;
