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
          <h2>Activities</h2>

          <div className={styles.grid}>

            <div className={styles.card}>
              <h2>Crossfit</h2>
              <div className={styles.placeholder}>
                <p>Add crossfit content</p>
              </div>
            </div>

            <div className={styles.card}>
              <h2>Coding</h2>
              <div className={styles.placeholder}>
                <p>Add coding content</p>
              </div>
            </div>

            <div className={styles.card}>
              <h2>Gaming</h2>
              <div className={styles.placeholder}>
                <p>Add gaming content</p>
              </div>
            </div>

          </div>

          
        </main>
      </div>
    )
}

export default About