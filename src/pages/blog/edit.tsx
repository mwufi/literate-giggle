import * as React from 'react';
import { useState } from 'react';

import BottomBar from '@/components/BottomBar';
import Seo from '@/components/Seo';
import {SocialEditor} from '@remirror/react-editors/social'
import BrowserOnly from '@docusaurus/BrowserOnly';

import { AdjustmentsIcon, AcademicCapIcon } from '@heroicons/react/solid';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Layout from '@/components/layout/Layout';
import MyEditor from '@/components/remirror/Editor';

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
          <div className='layout flex min-h-[86vh] flex-col items-center justify-start'>
            <div className='max-w-screen-sm w-full'>
              <MyEditor />
            </div>
          </div>
          <BottomBar />
        </section>
      </main>
    </Layout>
  );
}
