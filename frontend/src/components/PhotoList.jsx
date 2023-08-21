import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  // Convert props.photos object into an array
  const propsArray = Object.keys(props).map((property) => {
    return props[property];
  })

  const photoList = propsArray.map((photo) => {
    return (
      <li key={photo.id}>
        <PhotoListItem
          key={photo.id} 
          photo={photo}
        />
      </li>
    )
  })

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
