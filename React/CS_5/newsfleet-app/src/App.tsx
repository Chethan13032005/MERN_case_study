import React, { useState } from 'react';
import { CommentBox } from '../components/CommentBox'

export const App: React.FC = () => {
 
  const [comments, setComments] = useState<string[]>([]);

  
  const mockArticle = {
    title: "NewsFleet Launches Real-Time Dashboard",
    author: "Editorial Team"
  };

 
  const handleNewComment = (comment: string) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>NewsFleet Editorial Dashboard</h1>
      <hr />

      <section>
        <h2>Live Comments Feed</h2>
        <CommentBox onPost={handleNewComment} />
        
        <ul style={{ marginTop: '20px', paddingLeft: '20px' }}>
          {comments.length === 0 ? (
            <p style={{ color: '#666', fontStyle: 'italic' }}>No comments yet.</p>
          ) : (
            comments.map((c, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>{c}</li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
};

export default App;

//npm install --save-dev @testing-library/react @testing-library/jest-dom jest