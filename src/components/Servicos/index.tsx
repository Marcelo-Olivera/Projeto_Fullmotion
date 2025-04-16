import styles from "./Servicos.module.css";
import ActionAreaCard from "../Cards";

function Servicos() {
    return (
        <section id="servicos" className={styles.servicos}>
            <div className={styles.containerTexto}>
                <div className={styles.tituloContainer}>
                    <span className={styles.titulo}>Serviços</span>
                    <span className={styles.borda}></span>
                </div>
                <h1>
                    Nossos <span className={styles.highlight}>Serviços</span>
                </h1>
            </div>
            <div className={styles.cards}>
            <ActionAreaCard
                title="lorem ipsum"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos atque ratione voluptatum nisi maiores corporis eos doloribus fuga provident, velit incidunt facere porro aperiam, quam eaque neque. Cum, obcaecati iste."
                image="src/components/Servicos/back1.png"
            />
            <ActionAreaCard
                title="lorem ipsum"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos atque ratione voluptatum nisi maiores corporis eos doloribus fuga provident, velit incidunt facere porro aperiam, quam eaque neque. Cum, obcaecati iste."
                image="src/components/Servicos/back2.png"
            />
            <ActionAreaCard
                title="lorem ipsum"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos atque ratione voluptatum nisi maiores corporis eos doloribus fuga provident, velit incidunt facere porro aperiam, quam eaque neque. Cum, obcaecati iste."
                image="src/components/Servicos/back3.png"
            />
            </div>
        </section>
    );
}

export default Servicos;
