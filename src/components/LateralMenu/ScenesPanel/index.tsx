import * as React from "react";
import style from "@/styles/scenespanel.module.css";
import { changeType } from "@/slice/case.slice";
import { closeButtonRain } from "@/slice/sound.slice";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

import { scene } from "@/files/file";
import { type_scene } from "@/files/const";

import { CldImage } from "next-cloudinary";

export interface IScenesPanelProps {
  state: boolean;
}

export default function ScenesPanel(props: IScenesPanelProps) {
  const { type } = useSelector((state: RootState) => state.case);
  const dispatch = useDispatch();
  const handleChangeType = (t: string) => {
    dispatch(changeType(t));
    // dispatch(closeButtonRain());
  };
  return (
    <div className={`${style.container} ${!props.state && style.hiden}`}>
      {type != type_scene.loficafe && (
        <div
          className={style.item}
          onClick={() => handleChangeType(type_scene.loficafe)}
        >
          <p className={style.title}>Lofi Cafe</p>

          {/* <img className={style.img} src={scene.loficafe} alt="Lofi cafe" /> */}
          <CldImage
            className={style.img}
            src={scene.loficafe}
            alt="Lofi cafe"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      )}
      {type != type_scene.bookcafe && (
        <div
          className={style.item}
          onClick={() => handleChangeType(type_scene.bookcafe)}
        >
          <p className={style.title}>Book Cafe</p>
          {/* <img className={style.img} src={scene.bookcafe} alt="Book cafe" /> */}
          <CldImage
            className={style.img}
            src={scene.bookcafe}
            alt="Book cafe"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      )}
      {type != type_scene.bedroom && (
        <div
          className={style.item}
          onClick={() => handleChangeType(type_scene.bedroom)}
        >
          <p className={style.title}>Bedroom</p>
          {/* <img className={style.img} src={scene.bedroom} alt="Bedroom" /> */}
          <CldImage
            className={style.img}
            src={scene.bedroom}
            alt="Bedroom"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      )}
      {type != type_scene.plane && (
        <div
          className={style.item}
          onClick={() => handleChangeType(type_scene.plane)}
        >
          <p className={style.title}>Plane</p>
          {/* <img className={style.img} src={scene.plane} alt="Plane" /> */}
          <CldImage
            className={style.img}
            src={scene.plane}
            alt="Plane"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      )}

      {type != type_scene.lakehouse && (
        <div
          className={style.item}
          onClick={() => handleChangeType(type_scene.lakehouse)}
        >
          <p className={style.title}>Lake House</p>
          {/* <img className={style.img} src={scene.plane} alt="Plane" /> */}
          <CldImage
            className={style.img}
            src={scene.lakehouse}
            alt="Plane"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      )}
      {type != type_scene.inthewoods && (
        <div
          className={style.item}
          onClick={() => handleChangeType(type_scene.inthewoods)}
        >
          <p className={style.title}>In The Woods</p>
          {/* <img className={style.img} src={scene.plane} alt="Plane" /> */}
          <CldImage
            className={style.img}
            src={scene.inthewoods}
            alt="Plane"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      )}
      {type != type_scene.seoul && (
        <div
          className={style.item}
          onClick={() => handleChangeType(type_scene.seoul)}
        >
          <p className={style.title}>Seoul</p>
          {/* <img className={style.img} src={scene.plane} alt="Plane" /> */}
          <CldImage
            className={style.img}
            src={scene.seoul}
            alt="Plane"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      )}
      {type != type_scene.am_id_ream && (
        <div
          className={style.item}
          onClick={() => handleChangeType(type_scene.am_id_ream)}
        >
          <p className={style.title}>Am I Dreaming???</p>
          {/* <img className={style.img} src={scene.plane} alt="Plane" /> */}
          <CldImage
            className={style.img}
            src={scene.am_i_dreaming}
            alt="Plane"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      )}
      {type != type_scene.cozy_studio && (
        <div
          className={style.item}
          onClick={() => handleChangeType(type_scene.cozy_studio)}
        >
          <p className={style.title}>Cozy Studio</p>
          <CldImage
            className={style.img}
            src={scene.cozy_studio}
            alt="Plane"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      )}
    </div>
  );
}
