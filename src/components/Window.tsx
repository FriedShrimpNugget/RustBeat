import style from "./Styles/Start.module.css";
type Utils = {
  title: string;
  content: React.ReactNode;
  id: string;
  display: "none" | "block";
};
function Window({ title, content, id, display }: Utils) {
  return (
    <div className={style.window} id={id} style={{ display }}>
      <div className={style.windowHeader}>
        <div className={style.windowTitle}>{title}</div>
        <div className={style.windowButtons}>X</div>
      </div>
      <div className={style.windowContent}>{content}</div>
    </div>
  );
}
export default Window;
