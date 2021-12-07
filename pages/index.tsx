import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Switch from "../components/Switch";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
        </Head>
        <main className={styles.main}>
          {/*<h1 className={styles.title}>*/}
          {/*  Welcome to <a href="https://nextjs.org">Next.js!</a>*/}
          {/*</h1>*/}
          <h1 style={{"whiteSpace": "pre-line"}} className={`${styles.title} ${styles.titleCard}`}>Hi! 👋  I'm Sanjoth J. Rai.</h1>
          {/*<h1 className={`${styles.title} ${styles.titleCard}`}>I'm Sanjoth J. Rai.</h1>*/}

          {/*<a className={styles.card}>*/}
          {/*  <h2>About Me &rarr;</h2>*/}
          {/*  <p>My name is Sanjoth.</p>*/}
          {/*  <p>I am currently working at IBM, part of web-platform.</p>*/}
          {/*  <p>Currently experimenting with Neumorphism.</p>*/}

          {/*</a>*/}
          <Switch />

        </main>

        <footer className={styles.footer}>

        </footer>
      </div>
    </Layout>
  );
}
import Page from "../components/page";
// import Page from '@components/page'
// import Link from '@components/link'
