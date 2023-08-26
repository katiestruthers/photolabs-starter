import { useReducer } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FAV_PHOTO':
      state.likes[action.id] = !state.likes[action.id];
      if (Object.values(state.likes).includes(true)) {
        state.favPhoto = true;
      } else {
        state.favPhoto = false;
      }
      const newStateFavPhoto = { ...state };
      return newStateFavPhoto;

    case 'DISPLAY_PHOTO_DETAILS':
      state.photo = action.currentPhoto;
      const newStateDisplayPhoto = { ...state };
      return newStateDisplayPhoto;

    default:
      return state;
  }
}

const useApplicationData = () => {
  // Default actions for reducer
  const ACTIONS = {
    UPDATE_FAV_PHOTO: 'UPDATE_FAV_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
  }

  // Create default likes object
  const likesObj = {};
  for (const key in photos) {
    likesObj[key] = false;
  }

  // Create useReducer
  const initialState = { photos, topics, likes: likesObj, photo: null, favPhoto: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  return ({ state, dispatch, ACTIONS });
}

export default useApplicationData;