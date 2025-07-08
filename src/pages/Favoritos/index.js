import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';
import Banner from 'components/Banner';
import Card from 'components/Card';
import falconWinterCat from 'pages/Favoritos/falcon-winter-cat.png';
import { useFavoritoContext } from 'contextos/Favoritos';

function Favoritos() {
    const {favorito} = useFavoritoContext();

    return (
        <>
            <Banner imagem="favoritos"></Banner>
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id}/>
                })}
                <Card id='1' titulo='The Falcon and The Winter Cat' capa={falconWinterCat}/>
            </section>
        </>
    )
}

export default Favoritos