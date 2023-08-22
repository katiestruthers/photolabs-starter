import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { id, likedByKey } = props.photo;
  const { city, country } = props.photo.location;
  const { regular } = props.photo.urls;
  const { name, profile } = props.photo.user;

  return (
    <div className="photo-list__item">
      <PhotoFavButton likedByKey={likedByKey} key={id}/>
      <img src={regular} className="photo-list__image" onClick={() => props.clickHandling(props.photo)}/>
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p style={{margin: '0px'}}>{name}</p>
          <p style={{margin: '0px'}} className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
