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
          <h2>Contact</h2>
          
          <p>I&apos;m available on LinkedIn for any business enquiry</p>

          <div className={styles.grid}>

            <div className={styles.card}>
              <h2>Linked In</h2>
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