import styles from "./Product.module.css";
import person1 from "./../../public/img-1.jpg";
import Navpage from "../Components/Navpage";
export default function Product() {
  return (
    <main className={styles.product}>
      <Navpage />
      <section>
        <img
          src={person1}
          alt="person with dog overlooking mountain with sunset"
        />
        <div className={styles.text}>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
}
