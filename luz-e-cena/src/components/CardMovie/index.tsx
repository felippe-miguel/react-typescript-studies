import styles from "./CardMovie.module.css";
import Tag from "../Tag";
import type { Categoria, Censura } from "../Tag";

interface CardMovieProps {
  src: string;
  alt: string;
  titulo: string;
  genero: string;
  duracao: string;
  categoria: Categoria;
  censura: Censura;
}

const CardMovie = (props: CardMovieProps) => {
  const { src, alt, titulo, genero, duracao, categoria, censura } = props;

  return (
    <li className={styles.card}>
      <img src={src} alt={alt} />
      <div className={styles.container}>
        <h3>{titulo}</h3>
        <div className={styles.informacoes}>
          <div className={styles.linha1}>
            <p>{genero}</p>
            <Tag value={categoria} />
          </div>
          <div className={styles.linha2}>
            <p>{duracao}</p>
            <Tag value={censura} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardMovie;
