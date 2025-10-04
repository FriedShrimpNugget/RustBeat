import style from "./Styles/Song.module.css";

type Props = {
  song: string;
  artist: string;
};

export default function Song({ song, artist }: Props) {
  return (
    <div className={style.songContainer}>
      <p className={style.songTitle}>{song}</p>
      <p className={style.artistName}>{artist}</p>
    </div>
  );
}
