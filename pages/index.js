import Head from 'next/head';
import Layout, { siteTitle } from "../components/layout";
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My Intro</p>
        <p>
          Some random stuff about myself
        </p>
      </section>
    </Layout>
  )
}