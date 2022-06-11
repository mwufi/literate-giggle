import * as React from 'react';
import { useState } from 'react';

import BottomBar from '@/components/BottomBar';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-[95vh] flex-col items-center justify-start text-center'>
            <h1 className='mt-4'>Welcome to your home page</h1>
            <p className='mt-2 text-sm text-gray-800'>Tap the correct answer</p>
          </div>
          <BottomBar />
        </section>
      </main>
    </Layout>
  );
}
