export interface Comment {
  id: string;
  fileId: string;
  author: string;
  text: string;
}

export interface CommentSlice {
  comments: Comment[];
  addComment: (comment: Comment) => void;
  getCommentsByFile: (fileId: string) => Comment[];
}

export const createCommentSlice = (set: any, get: any) => ({
  comments: [],
  addComment: (comment: Comment) => set((state: any) => ({ comments: [...state.comments, comment] })),
  getCommentsByFile: (fileId: string) => get().comments.filter((c: Comment) => c.fileId === fileId),
});