import * as React from 'react';
import { useState } from 'react';

import {
  SparklesIcon,
  NewspaperIcon,
  GlobeIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';
import cx from '@/lib/clsxm';

const MenuItem: React.FC<{
  icon: JSX.Element;
  text: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}> = ({ icon, text, active = false, onClick}) => (
  <div
    className={cx(
      'flex flex-col text-gray-400 font-light',
      active && 'text-green-400'
    )}
    onClick={onClick}
  >
    <div className='w-7 h-7 m-auto'>{icon}</div>
    {active && text}
  </div>
);

const menu = [
  { icon: <SparklesIcon />, text: 'Learn' },
  { icon: <NewspaperIcon />, text: 'Explore' },
  { icon: <GlobeIcon />, text: 'Community' },
  { icon: <UserCircleIcon />, text: 'Me' },
];

const BottomBar = () => {
  const [active, setActive] = useState(0);

  return (
    <div className='p-2 flex justify-around bg-gray-100 shadow w-full absolute bottom-0'>
      {menu.map(({ icon, text }, i) => (
        <MenuItem
          icon={icon}
          text={text}
          active={i == active}
          onClick={() => setActive(i)}
        />
      ))}
    </div>
  );
};

export default BottomBar;
