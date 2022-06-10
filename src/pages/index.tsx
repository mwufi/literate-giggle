import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Button from '@/components/buttons/Button';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const qq = [
  {
    question: 'Do you think humans are sentient?',
    choices: ['Yep, for sure', 'No'],
  },
  {
    question:
      'Which computer language structures all webpages on the internet?',
    choices: ['HTML', 'Javascript'],
  },
  {
    question:
      'Which computer language structures all webpages on the internet?',
    choices: ['HTML', 'Javascript'],
  },
];

export default function HomePage() {
  const { question, choices } = qq[0];
  return (
    <Layout>
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-start text-center'>
            <h1 className='mt-4'>{question}</h1>
            <p className='mt-2 text-sm text-gray-800'>Tap the correct answer</p>

            <div className='flex flex-col justify-center items-stretch w-full mt-10 gap-3'>
              {choices.map((c) => (
                <Button variant='outline'>{c}</Button>
              ))}
            </div>

            <footer className='absolute bottom-2 text-gray-700'>
              <Button>Continue</Button>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
