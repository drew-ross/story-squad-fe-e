import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

//See https://unicode.org/emoji/charts/full-emoji-list.html for unicode equivalents
const emojiList = [
  '😀',
  '😃',
  '😄',
  '😁',
  '😆',
  '😅',
  '🤣',
  '😂',
  '🙂',
  '🙃',
  '😉',
  '😇',
  '🤩',
  '😋',
  '😛',
  '😜',
  '🤪',
  '😝',
  '🤑',
  '🤭',
  '🤫',
  '🤔',
  '🤐',
  '🤨',
  '😐',
  '😑',
  '😶',
  '😏',
  '😒',
  '🙄',
  '😬',
  '🤥',
  '😌',
  '😔',
  '😪',
  '🤤',
  '😴',
  '😷',
  '🤒',
  '🤕',
  '🤢',
  '🤮',
  '🤧',
  '🥵',
  '🥶',
  '🥴',
  '😵',
  '🤯',
  '🤠',
  '🥳',
  '😎',
  '🤓',
  '🧐',
  '😕',
  '😟',
  '🙁',
  '☹',
  '😮',
  '😯',
  '😲',
  '😳',
  '🥺',
  '😦',
  '😧',
  '😨',
  '😰',
  '😥',
  '😢',
  '😭',
  '😱',
  '😖',
  '😣',
  '😞',
  '😓',
  '😩',
  '😫',
  '🥱',
  '😤',
];

const Emoji = props => {
  const { emoji, handleClick } = props;

  return (
    <button className="emoji" onClick={() => handleClick(emoji)}>
      {emoji}
    </button>
  );
};

const EmojiPicker = props => {
  const { getChildState } = props;
  const [selectedEmojis, setSelectedEmojis] = useState([]);

  //If parent component wants to get this state, pass cb into props
  useEffect(() => {
    if (getChildState) {
      getChildState(selectedEmojis);
    }
  }, [selectedEmojis, getChildState]);

  const handleAddEmoji = emoji => {
    if (selectedEmojis.length < 6 && !selectedEmojis.includes(emoji)) {
      setSelectedEmojis([...selectedEmojis, emoji]);
    }
  };

  const handleRemoveEmoji = emoji => {
    setSelectedEmojis(
      selectedEmojis.filter(selectedEmoji => selectedEmoji !== emoji)
    );
  };

  return (
    <div className="EmojiPicker">
      <Card title="Give Feedback">
        {selectedEmojis.map(emoji => (
          <Emoji emoji={emoji} handleClick={handleRemoveEmoji} />
        ))}
      </Card>
      <Card>
        {emojiList.map(emoji => (
          <Emoji emoji={emoji} handleClick={handleAddEmoji} />
        ))}
      </Card>
    </div>
  );
};

export default EmojiPicker;
