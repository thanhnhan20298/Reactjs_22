import React from "react";

const YoutubeItem = (props) => {
  return (
    <div>
      <div>
        <div className={`youtube-header ${props.className}`}>
          <img src={props.image} alt="" className="youtube-image" />
        </div>
        <div className="youtube-footer">
          <img src={props.avatar} alt="" className="youtube-avatar" />
          <div className="youtube-info">
            <h3 className="youtube-title">
              {props.title || "Learning ReactJS 2022"}
            </h3>
            <h4 className="youtube-author">{props.author || "Thanh Nhan"}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
