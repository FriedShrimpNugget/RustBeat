import style from "./Styles/Window.module.css";

type WindowProps = {
  title: string;
  content?: React.ReactNode;
  id: string;
  styles?: React.CSSProperties;
};

function Window({ title, content, id , styles}: WindowProps) {
  return (
    <div className={`${style.window} hidden`} id={id}>
      <div className={style.windowHeader}>
        <div className={style.windowTitle}>{title}</div>
        <div className={style.windowButtons}></div>
      </div>
      <div className={style.windowContent} style={styles}>{content}</div>
    </div>
  );
}

export default Window;
