import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About me
            </h1>
            <p className="description">description of Judy...</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
