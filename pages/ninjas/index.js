import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Ninja.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    return ( 
        <>
            <Head>
                <title>Ninjas | Home</title>
                <meta name="description" content="Free next js tutorials" />
                <meta name="keywords" content="Free next js, learn next js" />
            </Head>
            <div>
                <h1>All Ninjas</h1>
                {ninjas.map(ninja => (
                  <Link href={`/ninjas/${ninja.id}`}>
                    <a key={ninja.id} className={styles.single}>
                        <h3>{ninja.name}</h3>
                        <p>{ninja.email}</p>
                    </a>
                  </Link>
                ))}
            </div>
        </>
     );
}
 
export default Ninjas;