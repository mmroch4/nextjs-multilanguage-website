import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from '../hooks/useTranslation';
import { Locale } from '../locales';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { locale, language, switchLanguage } = useTranslation();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <select value={locale} onChange={(e) => switchLanguage(e.currentTarget.value as Locale)}>
          <option value="en">🇺🇸 English</option>
          <option value="fr">🇫🇷 Français</option>
          <option value="pt">🇧🇷 Português</option>
        </select>

        <h1 className={styles.title}>
          {language.title} <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          {language.description} <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>{language.grid[0].title} &rarr;</h2>
            <p>{language.grid[0].paragraph}</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>{language.grid[1].title} &rarr;</h2>
            <p>{language.grid[1].paragraph}</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
            <h2>{language.grid[2].title} &rarr;</h2>
            <p>{language.grid[2].paragraph}</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>{language.grid[3].title} &rarr;</h2>
            <p>{language.grid[3].paragraph}</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {language.footer}{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
