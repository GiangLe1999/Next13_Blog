import { FC } from "react";

export default interface Props {
  className?: string;
  style?: {};
}

export const NewTab: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="1em"
      height="1em"
      baseProfile="basic"
      className={className}
    >
      <path
        fill="#37d0ee"
        d="M54,20v24c0,2.25-0.74,4.32-2,5.99V50c-1.69,2.24-4.29,3.75-7.25,3.97C44.51,53.99,44.25,54,44,54 H20c-5.52,0-10-4.48-10-10V20c0-0.25,0.01-0.51,0.03-0.75c0.22-2.96,1.73-5.56,3.97-7.25h0.01c1.67-1.26,3.74-2,5.99-2h24 C49.52,10,54,14.48,54,20z"
      />
      <path
        fill="#fff"
        d="M14.01,12H14c-2.24,1.69-3.75,4.29-3.97,7.25C10.01,19.49,10,19.75,10,20v12 c2.761,0,5-2.239,5-5v-7c0-0.108,0.003-0.221,0.017-0.38c0.102-1.375,0.778-2.65,1.862-3.525c0.048-0.033,0.095-0.068,0.142-0.103 C17.881,15.343,18.911,15,20,15h6c2.761,0,5-2.239,5-5H20C17.75,10,15.68,10.74,14.01,12z"
        opacity=".3"
      />
      <ellipse cx="32" cy="61" opacity=".3" rx="20" ry="3" />
      <path
        d="M54,44V22c-2.761,0-5,2.238-5,5v17c0,2.757-2.243,5-5,5H33c-2.761,0-5,2.238-5,5h16 C49.523,54,54,49.523,54,44z"
        opacity=".15"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M13.5,23.5V20c0-0.153,0.005-0.312,0.018-0.459c0.135-1.809,1.003-3.46,2.396-4.594l0.204-0.152"
      />
      <path
        fill="#9c34c2"
        d="M51,19.499V14c0-0.552-0.448-1-1-1h-5.5c-1.381,0-2.5-1.119-2.5-2.5v0C42,9.119,43.119,8,44.5,8H53 c1.657,0,3,1.343,3,3v8.499c0,1.381-1.119,2.5-2.5,2.5h0C52.119,21.999,51,20.879,51,19.499z"
      />
      <polygon fill="#9c34c2" points="51.823,21.349 42.649,12.182 54,10" />
      <g>
        <path
          fill="#9c34c2"
          d="M37.656,29.656l-3.312-3.311c-0.452-0.452-0.452-1.186,0-1.638l12.681-12.681l4.95,4.949 L39.294,29.656C38.842,30.108,38.108,30.108,37.656,29.656z"
        />
      </g>
    </svg>
  );
};

export const Moon: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      className={className}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
    </svg>
  );
};

export const Sun: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
    </svg>
  );
};

export const Github: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>
    </svg>
  );
};

export const Facebook: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
    </svg>
  );
};

export const Linkedin: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
    </svg>
  );
};

export const Twitter: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path>
    </svg>
  );
};

export const Right: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
};

export const Right2: FC<Props> = ({ className, style }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
};

export const NewTab2: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="0"
      viewBox="0 0 15 15"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const FacebookShare: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
    </svg>
  );
};

export const TwitterShare: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
    </svg>
  );
};

export const LinkedinShare: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="4.983" cy="5.009" r="2.188"></circle>
      <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
    </svg>
  );
};

export const PinterestShare: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M5.077 9.457c0-.778.136-1.513.404-2.199a5.63 5.63 0 0 1 1.121-1.802 7.614 7.614 0 0 1 1.644-1.329 7.513 7.513 0 0 1 2.002-.844 8.57 8.57 0 0 1 2.185-.281c1.139 0 2.199.241 3.182.721a6.021 6.021 0 0 1 2.391 2.094c.614.915.919 1.95.919 3.104 0 .692-.068 1.369-.207 2.031a8.28 8.28 0 0 1-.646 1.913 6.605 6.605 0 0 1-1.082 1.617 4.723 4.723 0 0 1-1.568 1.114 4.962 4.962 0 0 1-2.045.417c-.489 0-.977-.115-1.459-.346-.482-.23-.828-.546-1.036-.951-.073.281-.173.687-.306 1.218-.128.53-.214.872-.252 1.027-.04.154-.114.411-.222.767a5.183 5.183 0 0 1-.281.769l-.344.674a7.98 7.98 0 0 1-.498.838c-.181.262-.405.575-.672.935l-.149.053-.099-.108c-.107-1.133-.162-1.811-.162-2.035 0-.663.079-1.407.235-2.233.153-.825.395-1.862.72-3.109.325-1.246.511-1.979.561-2.196-.229-.467-.345-1.077-.345-1.827 0-.599.187-1.16.562-1.688.376-.526.851-.789 1.427-.789.441 0 .783.146 1.028.439.246.292.366.66.366 1.109 0 .476-.158 1.165-.476 2.066-.318.902-.476 1.575-.476 2.022 0 .453.162.832.486 1.129a1.68 1.68 0 0 0 1.179.449c.396 0 .763-.09 1.104-.271a2.46 2.46 0 0 0 .849-.733 6.123 6.123 0 0 0 1.017-2.225c.096-.422.17-.823.216-1.2.049-.379.07-.737.07-1.077 0-1.247-.396-2.219-1.183-2.915-.791-.696-1.821-1.042-3.088-1.042-1.441 0-2.646.466-3.611 1.401-.966.932-1.452 2.117-1.452 3.554 0 .317.048.623.139.919.089.295.186.53.291.704.104.171.202.338.291.492.09.154.137.264.137.33 0 .202-.053.465-.16.79-.111.325-.242.487-.4.487-.015 0-.077-.011-.185-.034a2.21 2.21 0 0 1-.979-.605 3.17 3.17 0 0 1-.659-1.022 6.986 6.986 0 0 1-.352-1.169 4.884 4.884 0 0 1-.132-1.153z"></path>
    </svg>
  );
};

export const RedditShare: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"></path>
    </svg>
  );
};

export const Copy: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path>
    </svg>
  );
};

export const Paste: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
    </svg>
  );
};

export const Outline: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4zM100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4zm116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 0 0-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 0 0 2.1-5.4V432c0-2.2-1.8-4-4-4z"></path>
    </svg>
  );
};

export const ArrowDown: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
    </svg>
  );
};

export const ArrowUp: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path>
    </svg>
  );
};

export const GithubIcon: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
    </svg>
  );
};

export const ThreeDots: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
    </svg>
  );
};

export const Edit: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path>
    </svg>
  );
};

export const TrashBin: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
    </svg>
  );
};

export const Heart: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      ></path>
    </svg>
  );
};

export const BreakHeart: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"></path>
    </svg>
  );
};

export const Spinner: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 32 32"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M 16 3 C 14.34375 3 13 4.34375 13 6 C 13 7.65625 14.34375 9 16 9 C 17.65625 9 19 7.65625 19 6 C 19 4.34375 17.65625 3 16 3 Z M 8.9375 6.4375 C 7.558594 6.4375 6.4375 7.558594 6.4375 8.9375 C 6.4375 10.316406 7.558594 11.4375 8.9375 11.4375 C 10.316406 11.4375 11.4375 10.316406 11.4375 8.9375 C 11.4375 7.558594 10.316406 6.4375 8.9375 6.4375 Z M 23.0625 7.9375 C 22.511719 7.9375 22.0625 8.386719 22.0625 8.9375 C 22.0625 9.488281 22.511719 9.9375 23.0625 9.9375 C 23.613281 9.9375 24.0625 9.488281 24.0625 8.9375 C 24.0625 8.386719 23.613281 7.9375 23.0625 7.9375 Z M 6 13.75 C 4.757813 13.75 3.75 14.757813 3.75 16 C 3.75 17.242188 4.757813 18.25 6 18.25 C 7.242188 18.25 8.25 17.242188 8.25 16 C 8.25 14.757813 7.242188 13.75 6 13.75 Z M 26 14.75 C 25.308594 14.75 24.75 15.308594 24.75 16 C 24.75 16.691406 25.308594 17.25 26 17.25 C 26.691406 17.25 27.25 16.691406 27.25 16 C 27.25 15.308594 26.691406 14.75 26 14.75 Z M 8.9375 21.0625 C 7.832031 21.0625 6.9375 21.957031 6.9375 23.0625 C 6.9375 24.167969 7.832031 25.0625 8.9375 25.0625 C 10.042969 25.0625 10.9375 24.167969 10.9375 23.0625 C 10.9375 21.957031 10.042969 21.0625 8.9375 21.0625 Z M 23.0625 21.5625 C 22.234375 21.5625 21.5625 22.234375 21.5625 23.0625 C 21.5625 23.890625 22.234375 24.5625 23.0625 24.5625 C 23.890625 24.5625 24.5625 23.890625 24.5625 23.0625 C 24.5625 22.234375 23.890625 21.5625 23.0625 21.5625 Z M 16 24.25 C 15.035156 24.25 14.25 25.035156 14.25 26 C 14.25 26.964844 15.035156 27.75 16 27.75 C 16.964844 27.75 17.75 26.964844 17.75 26 C 17.75 25.035156 16.964844 24.25 16 24.25 Z"></path>
    </svg>
  );
};

export const NoComments: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"></path>
      <path d="M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"></path>
    </svg>
  );
};

export const Posts: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
    </svg>
  );
};

export const Magnifier: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"></path>
      </g>
    </svg>
  );
};
