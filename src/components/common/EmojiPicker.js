import React, { useState } from 'react';
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
  const [selectedEmojis, setSelectedEmojis] = useState([]);

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
    <>
      <Card title="Your Feedback">
        {selectedEmojis.map(emoji => (
          <Emoji emoji={emoji} handleClick={handleRemoveEmoji} />
        ))}
      </Card>
      <Card title="Give Feedback">
        {emojiList.map(emoji => (
          <Emoji emoji={emoji} handleClick={handleAddEmoji} />
        ))}
      </Card>
    </>
  );
};

export default EmojiPicker;
