import * as React from 'react';
import { useState } from 'react';

import BottomBar from '@/components/BottomBar';
import Seo from '@/components/Seo';

import { AdjustmentsIcon, AcademicCapIcon } from '@heroicons/react/solid';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-slate-50'>
          <div className='sticky top-0 p-4 flex items-center border-b bg-white'>
            <div className='font-bold mr-auto'>BobaBuddy</div>
            <div className='font-bold text-gray-500 h-7 w-7'>
              <AdjustmentsIcon />
            </div>
          </div>
          <div className='layout flex min-h-[86vh] flex-col items-center justify-center text-center'>
            <div className="mt-10"></div>
            <div className='w-[80%]'>
              <img src='svg/laptop.svg' />
            </div>
            <h1 className=''>Save your progress</h1>
            <p>Create a profile to keep your progress safe</p>

            <div className='mt-8 w-full mb-auto'>
            <Button>Save Progress!</Button>
            </div>
            
          </div>
          <BottomBar />
        </section>
      </main>
    </Layout>
  );
}
