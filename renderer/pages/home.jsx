import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LoginAuthComponents from '../components/Auth/LoginAuthComponents';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Ingenitek</title>
      </Head>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            Kasiran
          </a>
          <LoginAuthComponents />
        </div>
      </section>

    </React.Fragment>
  );
}

export default Home;
