import * as React from 'react';
import { useState } from 'react';

import BottomBar from '@/components/BottomBar';
import Seo from '@/components/Seo';

import { AdjustmentsIcon, GlobeIcon } from '@heroicons/react/solid';
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

const Quiz = (
  <>
    <h1 className='mt-16'>Hey, how was your day?</h1>
    <p className='mt-2 text-sm text-gray-800'>Tap the correct answer</p>
    <div className='flex flex-col justify-center items-stretch w-full mt-10 gap-3 mb-10'>
      <Button variant='outline'>Great!</Button>
      <Button variant='outline'>Fine, ok</Button>
    </div>
  </>
);

const items = [
  { text: 'Discovering HTML and Tags' },
  { text: 'Structuring text with tags' },
  { text: 'building buttons' },
  { text: 'Creating LInks' },
];

const Section = (
  <>
    <div className='text-left w-full text-gray-700'>
      <h1 className='mt-8'>HTML Basics</h1>
      <p className='mt-1 text-sm text-gray-500'>
        Create webpages using HTML tags
      </p>

      <div className='mt-8 flex gap-1 items-center'>
        <div className='h-6 w-6 text-green-400'>
          <GlobeIcon />
        </div>
        <h2 className='text-gray-700'>Learn</h2>
      </div>

      <div className='mt-4 flex flex-col gap-2'>
          {items.map(({ text }) => (
            <div className='rounded border border-green-200 p-4 font-medium text-lg bg-green-50 w-full capitalize'>{text}</div>
          ))}
        </div>
    </div>
  </>
);

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-white'>
          <div className='sticky top-0 p-4 flex items-center border-b bg-white'>
            <div className='font-bold mr-auto'>BobaBuddy</div>
            <div className='font-bold text-gray-500 h-7 w-7'>
              <AdjustmentsIcon />
            </div>
          </div>
          <div className='layout flex min-h-[86vh] flex-col items-center justify-start text-center'>
            {Section}
          </div>
          <BottomBar />
        </section>
      </main>
    </Layout>
  );
}
