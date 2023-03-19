import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const About: NextPage = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>Nikolaj Reibke</title>
          <meta name="Personal" content="Website about me personally" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h2>Projects</h2>
          
          <p>A couple of projects</p>

          <div className={styles.grid}>

            <div className={styles.card}>
              <h2>Astroids destroyer game</h2>
              <p>New features to load and unload during gameplay</p>
              <div className={styles.placeholder}>
                <p>Add Thumbnail for LinkedIn</p>
              </div>
            </div>

          </div>

        </main>
      </div>
    )
}

export default About