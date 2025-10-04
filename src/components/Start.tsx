import style from "./Styles/Start.module.css";
function Start() {
  return (
    <div>
      <div className={style.trapezoid1} id="Play">
        <h5 className={style.title}>PLAY</h5>
      </div>
      <div className={style.trapezoid2} id="Settings">
        <h5 className={style.title}>Settings</h5>
      </div>
    </div>
  );
}
export default Start;
