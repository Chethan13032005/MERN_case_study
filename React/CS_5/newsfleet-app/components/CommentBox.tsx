import React, { useState } from 'react';

interface CommentBoxProps {
  onPost: (comment: string) => void;
}

export const CommentBox: React.FC<CommentBoxProps> = ({ onPost }) => {
  const [text, setText] = useState('');

  const handlePost = () => {
    if (text.trim()) {
      onPost(text);
      setText(''); 
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};