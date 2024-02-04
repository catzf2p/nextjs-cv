import React, { ReactElement } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

type TitleProps = {
  icon: ReactElement;
  text: string;
};

export const Title = (props: TitleProps) => {
  const { icon, text } = props;
  return (
    <>
      <ScrollAnimation
        animateOnce={true}
        animateIn='animate__fadeInUp'
        offset={0}
      >
        <h2 className='flex items-center text-3xl font-normal'>
          <span className='text-xl'>
            {React.cloneElement(icon, {
              className: `mr-4 h-10 w-10 ${icon.props.className}`,
            })}
          </span>
          <span className='bg-gradient-to-r from-purple-500 to-blue-700 bg-clip-text text-3xl font-bold text-transparent'>{text}</span>
        </h2>
      </ScrollAnimation>
    </>
  );
};
