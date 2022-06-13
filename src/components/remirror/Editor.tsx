import 'remirror/styles/all.css';

import {
  BoldExtension,
  ItalicExtension,
  CalloutExtension,
} from 'remirror/extensions';
import { Remirror, useRemirror } from '@remirror/react';

const MyEditor = () => {
  const { manager, state } = useRemirror({
    extensions: () => [
      new BoldExtension(),
      new ItalicExtension(),
      new CalloutExtension({ defaultType: 'warn' }),
    ],

    // set the initial content
    content: '<p>I love remirror!</p>',

    // place the cursor at the start. can also be a numbered position!
    selection: 'start',

    // set the string handler which means the content provided will be automatically
    // handled as html
    stringHandler: 'html',
  });

  return (
    <div className='remirror-theme'>
      <Remirror manager={manager} initialContent={state} />
    </div>
  );
};

export default MyEditor;
