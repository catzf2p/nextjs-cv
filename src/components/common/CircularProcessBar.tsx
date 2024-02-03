import React, { useEffect, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type ProgressBarProps = {
  duration?: number;
  percent: number;
};

export const CircularProgressBar: React.FC<ProgressBarProps> = ({ duration, percent }) => {
  const [durationState, setDurationState] = useState(1500);
  const [percentState, setPercentState] = useState(0);

  useEffect(() => {
    setDurationState(duration ?? 1500);
    setPercentState(percent);
  });

  return (
    <>
      <ProgressProvider
        valueStart={10}
        valueEnd={percentState}
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
                  pathTransitionDuration: durationState / 1000,
                })}
              />
            </>
          );
        }}
      </ProgressProvider>
    </>
  );
};

type ProgressProviderProps = {
  valueStart: number;
  valueEnd: number;
  children: (value: number) => JSX.Element;
};

function ProgressProvider({ valueStart, valueEnd, children }: ProgressProviderProps) {
  const [value, setValue] = React.useState(valueStart);
  React.useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
}
