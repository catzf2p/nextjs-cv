import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type ProgressBarProps = {
  duration?: number;
  percent: number;
};

type ProgressProviderProps = {
  start: number;
  end: number;
  children: (value: number) => JSX.Element;
};

const ProgressProvider = (props: ProgressProviderProps) => {
  const { start, end, children } = props;
  const [curValue, setCurValue] = useState(start);

  useEffect(() => {
    setCurValue(end);
  }, [end]);

  return children(curValue);
};

export const CircularProgressBar = (props: ProgressBarProps) => {
  const { duration, percent } = props;
  const [curDuration, setCurDuration] = useState(1500);
  const [curPercent, setCurPercent] = useState(0);

  useEffect(() => {
    setCurDuration(duration ?? 1500);
    setCurPercent(percent);
  });

  return (
    <>
      <ProgressProvider
        start={10}
        end={curPercent}
      >
        {(value: number) => {
          return (
            <>
              <CircularProgressbar
                value={value}
                text={`${value}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: '#0F172A',
                  textColor: '#bfdbfe',
                  pathColor: '#162451',
                  trailColor: 'transparent',
                  pathTransitionDuration: curDuration / 1000,
                })}
              />
            </>
          );
        }}
      </ProgressProvider>
    </>
  );
};
