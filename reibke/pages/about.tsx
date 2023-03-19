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
          <h2>About me</h2>
          <p>
            Software Engineering proffesional, original from Fyn, Denmark.

            I graduated from University of Southern Denmark in 2017 as a Cand.Polyt in Software Engineering.
          </p>

          <div className={styles.grid}>
            
            <div className={styles.card}>
              <h2>Significant subjects - Masters</h2>
              <ul>
                <li>Scalable software</li>
                <li>Adv. Project management</li>
                <li>Internet of things</li>
                <li>Data science</li>
                <li>Machine learning</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h2>Significant subjects - Bachelor</h2>
              <ul>  
                <li>Software engineering</li>
                <li>Basic Project management</li>
                <li>Software code maintaince</li>
                <li>Software quality markers</li>
                <li>User Experience design</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    )
}

export default About