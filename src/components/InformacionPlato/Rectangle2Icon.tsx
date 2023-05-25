import { memo, SVGProps } from 'react';

const Rectangle2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 116 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 6.95035C0 3.11178 2.69093 0 6.01036 0H109.99C113.309 0 116 3.11178 116 6.95035V28.4965C116 32.335 113.309 35.4468 109.99 35.4468H6.01036C2.69093 35.4468 0 32.335 0 28.4965V6.95035Z'
      fill='#F79009'
    />
  </svg>
);
const Memo = memo(Rectangle2Icon);
export { Memo as Rectangle2Icon };
