import React, {useState, useCallback} from "react";
import "./style.css";
import ReactPlayer from "react-player";

const youtubeConfig = {
  theme: "dark",
  modestbranding: 1,
  controls: 2,
  autohide: 2,
  showinfo: 0,
  showsearch: 0,
  rel: 1,
  iv_load_policy: 3,
  cc_load_policy: 1
};

const stopOpt = {
  width: "120px",
  height: "60px",
  cc_load_policy: 1,
  class: "pause",
};

const playOpt = {
  width: "320px",
  height: "210px",
  class: "play"
};

function VideoInfo({id, info}) {
  const [opt, setOpt] = useState(stopOpt);
  const changeSize = useCallback(
    status => {
      if (status === "play") {
        setOpt(playOpt);
      } else {
        setOpt(stopOpt);
      }
    },
    [setOpt]
  );

  return (
    <div className={`video-container video-container-${opt && opt.class}`}>
      <div className="player-wrapper">
        {opt && (
          <ReactPlayer
            className="react-player"
            url={"https://www.youtube.com/embed/" + id}
            width={opt.width}
            light={true}
            height={opt.height}
            youtubeConfig={{playerVars: youtubeConfig}}
            onReady={() => changeSize("play")}
            onStart={() => changeSize("play")}
            onPlay={() => changeSize("play")}
            onPause={() => changeSize("pause")}
          />
        )}
      </div>
      <div className="video-info">
        <div className="video-desc">{info}</div>
        <div className="video-panel">
          <i className="fa fa-television"/>
          <span className="label">Chanel</span>
          <i className="fa fa-play-circle-o"/>
          <i className="fa fa-info-circle"/>
          <i className="fa fa-file-text"/>
          <i className="fa fa-tag"/>
        </div>
      </div>
    </div>
  );
}

export default VideoInfo;
