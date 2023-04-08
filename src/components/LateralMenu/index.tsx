import * as React from "react";
import style from "@/styles/lateralmenu.module.css";
import MixerPanel from "../MixerPanel";
import ScenesPanel from "../ScenesPanel";
import GeneralSetting from "../GeneralSetting";
export interface ILateralMenuProps {}

export default function LateralMenu(props: ILateralMenuProps) {
  const [stateMixer, setStateMixer] = React.useState<boolean>(false);
  const [stateScenes, setStateScenes] = React.useState<boolean>(false);
  const [stateGeneralSetting, setStateGeneralSetting] =
    React.useState<boolean>(false);

  return (
    <div className={style.container}>
      <div className={style.item} onClick={() => setStateMixer(!stateMixer)}>
        <p className={style.title}>Mixer</p>
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
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
          />
        </svg>
      </div>
      <div className={style.item} onClick={() => setStateScenes(!stateScenes)}>
        <p className={style.title}>Scenes</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={style.icon}
        >
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={style.item}
        onClick={() => setStateGeneralSetting(!stateGeneralSetting)}
      >
        <p className={style.title}>Setting</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={style.icon}
        >
          <path
            fillRule="evenodd"
            d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className={`${style.mixer} ${stateMixer && style.openmixer}`}>
        <MixerPanel state={stateMixer} />
      </div>
      <div className={`${style.scenes} ${stateScenes && style.openscenes}`}>
        <ScenesPanel state={stateScenes} />
      </div>
      <div
        className={`${style.generalsetting} ${
          stateGeneralSetting && style.opengeneralsetting
        }`}
      >
        <GeneralSetting state={stateGeneralSetting} />
      </div>
    </div>
  );
}
