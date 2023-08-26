import { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FAV_PHOTO':
      state.likes[action.id] = !state.likes[action.id];
      if (Object.values(state.likes).includes(true)) {
        state.favPhoto = true;
      } else {
        state.favPhoto = false;
      }
      return { ...state };

    case 'DISPLAY_PHOTO_DETAILS':
      state.photo = action.currentPhoto;
      return { ...state };

    case 'SET_PHOTO_DATA':
      state.photos = action.payload;

      // Create default likes object
      const likesObj = {};
      for (const key in state.photos) {
        likesObj[key] = false;
      }
      state.likes = likesObj;
      return { ...state };

    case 'SET_TOPIC_DATA':
      state.topics = action.payload;
      return { ...state };

    default:
      return state;
  }
}

const useApplicationData = () => {
  // Default actions for reducer
  const ACTIONS = {
    UPDATE_FAV_PHOTO: 'UPDATE_FAV_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA'
  }

  // Create useReducer
  const initialState = { photos: [], topics: [], likes: {}, photo: null, favPhoto: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch photo data
  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(photoData => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData }));
   }, []);

  // Fetch topic data
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(topicData => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData }));
   }, []);

  return ({ state, dispatch, ACTIONS });
}

export default useApplicationData;