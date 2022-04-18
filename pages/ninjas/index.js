import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const ninjas = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  return {
    props: { ninjas },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>Hello Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
