import CountUp from 'react-countup';
import React, { useEffect, useState } from 'react';

type ProgressBarProps = {
  duration?: number;
  percent: number;
  title: string;
};

export const ProgressBar = (props: ProgressBarProps) => {
  const { duration, percent, title } = props;
  const [durationState, setDurationState] = useState(1500);
  const [percentState, setPercentState] = useState(0);
  const [titleState, setTitleState] = useState('');

  useEffect(() => {
    setDurationState(duration ?? 1500);
    setPercentState(percent);
    setTitleState(title);
  });

  return (
    <>
      <div className='mb-1 flex justify-between'>
        <span>{titleState}</span>
        <CountUp
          start={0}
          end={percentState}
          duration={durationState / 1000}
          suffix={'%'}
        >
          {({ countUpRef }) => <span ref={countUpRef} />}
        </CountUp>
      </div>
      <div className='w-full rounded-full border border-blue-600 bg-slate-800/30 ring-offset-2 ring-offset-blue-600'>
        <div
          className='m-0.5 h-1 rounded-full bg-gradient-to-r from-blue-500 to-rose-500 transition-[width]'
          style={{ width: `${percentState}%`, transitionDuration: `${durationState / 1000}s` }}
        ></div>
      </div>
    </>
  );
};
