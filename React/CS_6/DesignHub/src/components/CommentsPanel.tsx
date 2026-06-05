import { useDesignHubStore } from '../store/store';

export function CommentsPanel({ fileId }: { fileId: string }) {

  const allComments = useDesignHubStore((s) => s.comments);
 
  const comments = allComments.filter((c) => c.fileId === fileId);
  
  const addComment = useDesignHubStore((s) => s.addComment);

  return (
    <div>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>{c.author}: {c.text}</li>
        ))}
      </ul>
      <button onClick={() => addComment({ id: Date.now().toString(), fileId, author: 'Alex', text: 'Hello!' })}>
        Add Comment
      </button>
    </div>
  );
}