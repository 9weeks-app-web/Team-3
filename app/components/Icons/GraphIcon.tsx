import { IconProps } from './HeartIcon';

export default function GraphIcon({ color }: IconProps) {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Graph'>
        <path
          id='Ellipse 1'
          d='M7.22222 3.55469C7.22222 3.0024 6.77167 2.54649 6.2265 2.63487C5.34999 2.77697 4.51006 3.10572 3.76534 3.60332C2.7421 4.28703 1.94458 5.25881 1.47364 6.39577C1.00269 7.53273 0.879472 8.78381 1.11956 9.99081C1.35964 11.1978 1.95225 12.3065 2.82245 13.1767C3.69264 14.0469 4.80133 14.6395 6.00833 14.8796C7.21532 15.1197 8.4664 14.9964 9.60336 14.5255C10.7403 14.0545 11.7121 13.257 12.3958 12.2338C12.8934 11.4891 13.2222 10.6491 13.3643 9.77263C13.4526 9.22746 12.9967 8.77691 12.4444 8.77691H8.72222C7.89379 8.77691 7.22222 8.10534 7.22222 7.27691V3.55469Z'
          stroke={color}
          strokeWidth='1.2'
        />
        <path
          id='Ellipse 2'
          d='M9.55556 2C9.55556 1.44772 10.007 0.990709 10.5499 1.09158C10.9224 1.16076 11.2874 1.26878 11.6391 1.41443C12.2996 1.68804 12.8998 2.08908 13.4054 2.59464C13.9109 3.1002 14.312 3.7004 14.5856 4.36095C14.7312 4.71258 14.8392 5.07764 14.9084 5.45005C15.0093 5.99305 14.5523 6.44445 14 6.44445L10.5556 6.44444C10.0033 6.44444 9.55556 5.99673 9.55556 5.44444V2Z'
          stroke={color}
          strokeWidth='1.2'
        />
      </g>
    </svg>
  );
}