import * as React from "react";
import style from "@/styles/controllerinside.module.css";
import Button from "@/components/Button";
import { location_scene, weather_scene } from "@/files/const";
import {
  changeVolumeRain,
  openButtonRain,
  closeButtonRain,
  changeVolumeKeyboard,
  openButtonKeyboard,
  closeButtonKeyboard,
  changeVolumePeople,
  openButtonPeople,
  closeButtonPeople,
} from "@/slice/sound.slice";

import { changeLocation, changeWeather } from "@/slice/case.slice";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store";
export interface IControllerLofiCafeInSideProps {}

export default function ControllerLofiCafeInSide(
  props: IControllerLofiCafeInSideProps
) {
  const weather = useSelector((state: RootState) => state.case.weather);
  const dispatch = useDispatch();
  const hadleOutside = () => {
    dispatch(changeLocation(location_scene.outside));
  };

  const { rain, keyboard, people } = useSelector(
    (state: RootState) => state.sound
  );
  //tat/bat thanh am thanh
  const { stateRain, stateKeyboard, statePeople } = useSelector(
    (state: RootState) => state.sound
  );
  //-----mua
  //chuyen canh+am thanh
  const handleChangeWeather = () => {
    if (weather == weather_scene.stop_rain) {
      dispatch(changeWeather(weather_scene.rain));
      dispatch(openButtonRain());
    } else {
      dispatch(changeWeather(weather_scene.stop_rain));
      dispatch(closeButtonRain());
    }
  };
  //chuyen am luong
  const changeVolumeRainButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeRain(v));

    if (v > 0) dispatch(changeWeather(weather_scene.rain));
    else dispatch(changeWeather(weather_scene.stop_rain));
  };

  //-------ban phim
  const handleChangeKeyboard = () => {
    if (stateKeyboard == true) {
      dispatch(closeButtonKeyboard());
    } else {
      dispatch(openButtonKeyboard());
    }
  };
  const changeVolumeKeyboardButton = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeKeyboard(v));
  };

  //-----people
  const handleChangePeople = () => {
    if (statePeople == true) {
      dispatch(closeButtonPeople());
    } else {
      dispatch(openButtonPeople());
    }
  };
  const changeVolumePeopleButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumePeople(v));
  };

  return (
    <div className={style.container}>
      <div className="absolute  top-[40%] left-[70%]">
        <Button title="Outside" type="position" action={hadleOutside} />
      </div>
      <div className="absolute top-[70%] left-[40%]">
        <Button
          title="Keyboard"
          type="audio"
          state={stateKeyboard}
          volume={keyboard}
          action={handleChangeKeyboard}
          changeVolumeSound={changeVolumeKeyboardButton}
        />
      </div>
      <div className="absolute top-[70%] left-[60%]">
        <Button
          title="People Talks"
          type="audio"
          state={statePeople}
          volume={people}
          action={handleChangePeople}
          changeVolumeSound={changeVolumePeopleButton}
        />
      </div>
      <div className="absolute top-[35%] left-[10%]">
        <Button
          title="City Rain"
          type="audio"
          state={stateRain}
          volume={rain}
          action={handleChangeWeather}
          changeVolumeSound={changeVolumeRainButton}
        />
      </div>
    </div>
  );
}
