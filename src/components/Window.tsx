import style from "./Styles/Window.module.css";

type WindowProps = {
  title: string;
  content?: React.ReactNode;
  id: string;
};

function Window({ title, content, id }: WindowProps) {
  return (
    <div className={`${style.window} hidden`} id={id}>
      <div className={style.windowHeader}>
        <div className={style.windowTitle}>{title}</div>
        <div className={style.windowButtons}></div>
      </div>
      <div className={style.windowContent}>{content}</div>
    </div>
  );
}

export default Window;
