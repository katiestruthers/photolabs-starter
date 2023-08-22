import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import objectToArray from "helpers/objectToArray";

const PhotoList = (props) => {
  const propsArray = objectToArray(props.photos);
  const photoList = propsArray.map((photo) => {
    return (
      <li key={photo.id}>
        <PhotoListItem
          key={photo.id} 
          photo={photo}
          photoHandling={props.photoHandling}
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
