import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Custom Logging Middleware
const logMiddleware = (config) => (set, get, api) =>
  config(
    (args) => {
      console.log('Before:', get());
      set(args);
      console.log('After:', get());
    },
    get,
    api
  );

export const useNoteStore = create(
  devtools(
    immer(
      logMiddleware((set) => ({
        notes: [],
        
        // ADDED: This is the function React Query was looking for!
        setNotes: (notes) =>
          set((state) => {
            state.notes = notes;
          }, false, 'notes/setNotes'), // Naming the action for Redux DevTools
          
        addNote: (note) =>
          set((state) => {
            state.notes.push(note);
          }, false, 'notes/addNote'),
          
        updateNote: (id, text) =>
          set((state) => {
            const note = state.notes.find((n) => n.id === id);
            if (note) note.text = text;
          }, false, 'notes/updateNote'),
          
        deleteNote: (id) =>
          set((state) => {
            state.notes = state.notes.filter((n) => n.id !== id);
          }, false, 'notes/deleteNote'),
      }))
    ),
    { name: 'NoteStore' }
  )
);