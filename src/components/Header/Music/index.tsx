import * as React from "react";
import style from "@/styles/music.module.css";

import { changeVolumeAudio } from "@/slice/sound.slice";
import { changeNumMusic } from "@/slice/music.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

import { type1, type2, type3 } from "@/files/file";
const play_pause =
  "M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z";
const play =
  "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z";

export interface IMusicProps {}

export default function Music(props: IMusicProps) {
  const [isPlaying, setIsPlaying] = React.useState({
    isPlay: false,
    icon: play,
  });
  const { type, num, src } = useSelector((state: RootState) => state.music);
  //const [url, setUrl] = React.useState<string>("");
  // React.useEffect(() => {
  //   let result = "";
  //   const fetchData = async () => {
  //     const res = await fetch(`/api/getOneMusic?id=${type}&index=${num}`);
  //     const data = await res.json();
  //     result = data;
  //     console.log({ music: data, num });
  //     setUrl(data);
  //   };
  //   fetchData();
  //   if (result == "error") {
  //     console.log("fetch music error");
  //     fetchData();
  //   }
  // }, [type, num]);

  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (isPlaying.isPlay === true) {
      setIsPlaying({ isPlay: false, icon: play });
      audio?.pause();
    } else {
      setIsPlaying({ isPlay: true, icon: play_pause });
      audio?.play();
    }
  };

  const handleNext = () => {
    if (type == 1) {
      if (num == type1) {
        dispatch(changeNumMusic(0));
      } else {
        dispatch(changeNumMusic(num + 1));
      }
    } else if (type == 2) {
      if (num == type2) {
        dispatch(changeNumMusic(0));
      } else {
        dispatch(changeNumMusic(num + 1));
      }
    } else if (type == 3) {
      if (num == type3) {
        dispatch(changeNumMusic(0));
      } else {
        dispatch(changeNumMusic(num + 1));
      }
    }
    setIsPlaying({ isPlay: true, icon: play_pause });
  };

  const handlePrev = () => {
    if (type == 1) {
      if (num == 0) {
        dispatch(changeNumMusic(type1));
      } else {
        dispatch(changeNumMusic(num - 1));
      }
    } else if (type == 2) {
      if (num == 0) {
        dispatch(changeNumMusic(type2));
      } else {
        dispatch(changeNumMusic(num - 1));
      }
    } else if (type == 3) {
      if (num == 0) {
        dispatch(changeNumMusic(type3));
      } else {
        dispatch(changeNumMusic(num - 1));
      }
    }
    setIsPlaying({ isPlay: true, icon: play_pause });
  };
  const { audio } = useSelector((state: RootState) => state.sound);
  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.preload = "none";
      audioRef.current.volume = audio;
    }
  }, [audio]);
  const volume = useSelector((state: RootState) => state.sound.audio);
  const dispatch = useDispatch();

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeAudio(value));
  };
  const [stateVolume, setStateVolume] = React.useState(0);
  const handleOpenVolume = () => {
    if (stateVolume == 0) setStateVolume(1);
    else setStateVolume(0);
  };

  return (
    <div className={style.container}>
      <div className={style.control}>
        <button
          className={style.button}
          id="button_back"
          onClick={handlePrev}
          title="Back"
          aria-label="Back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={style.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className={style.button}
          id="button_play"
          onClick={handlePlay}
          title="Play/Pause"
          aria-label="Play/Pause"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={style.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isPlaying.icon}
            />
          </svg>
        </button>
        <button
          className={style.button}
          id="button_forward"
          onClick={handleNext}
          title="Forward"
          aria-label="Forward"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={style.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          className={style.button}
          id="button_volumn"
          onClick={handleOpenVolume}
          title="Volumn"
          aria-label="Volumn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={style.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${style.volume} ${stateVolume == 0 && style.closeVolumn}`}
      >
        <input
          className={style.input}
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={changeVolume}
        />
      </div>
      <audio autoPlay ref={audioRef} src={src} onEnded={handleNext} />
    </div>
  );
}
