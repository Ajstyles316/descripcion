import { memo, SVGProps } from 'react';

const Edit2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1188_1518)'>
      <path
        d='M14.1667 2.5C14.3855 2.28113 14.6454 2.10751 14.9313 1.98906C15.2173 1.87061 15.5238 1.80964 15.8333 1.80964C16.1429 1.80964 16.4494 1.87061 16.7353 1.98906C17.0213 2.10751 17.2811 2.28113 17.5 2.5C17.7189 2.71887 17.8925 2.97871 18.0109 3.26467C18.1294 3.55064 18.1904 3.85714 18.1904 4.16667C18.1904 4.47619 18.1294 4.78269 18.0109 5.06866C17.8925 5.35463 17.7189 5.61446 17.5 5.83333L6.25 17.0833L1.66667 18.3333L2.91667 13.75L14.1667 2.5Z'
        stroke='#5D6679'
        strokeWidth={1.66667}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_1188_1518'>
        <rect width={20} height={20} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Edit2Icon);
export { Memo as Edit2Icon };
