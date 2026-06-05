import { version } from 'react';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

export const usePreferencesStore=create(
    persist((set) => ({
        theme: 'light',
        fontSize:'14',
        setTheme: (theme) => set({theme}),
        setFontSize: (fontSize) => set({fontSize}),
    }), {
        name: 'collabnotes-preferences',
        storage: createJSONStorage(() => localStorage),

        partialize: (state) => ({
            theme: state.theme,
                theme: state.theme,
                fontSize: state.fontSize
            }),
            version:2,
        migrate: (persistedState, version) => {
            if(version<2){
                return{
                    ...persistedState,
                    fontSize:'14'
                };
                return persistedState;
            }
        }
    })
);