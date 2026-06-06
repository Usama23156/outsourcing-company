type LogoProps = {
  className?: string;
};

export function LogoIcon({ className }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="14" fill="url(#logo-icon-bg)" />
      <path
        d="M15 30.5V18.4C15 17.6 15.9 17.1 16.58 17.53L23.6 21.97C23.84 22.12 24.16 22.12 24.4 21.97L31.42 17.53C32.1 17.1 33 17.6 33 18.4V30.5C33 31.33 32.08 31.83 31.39 31.37L24.42 26.72C24.17 26.55 23.83 26.55 23.58 26.72L16.61 31.37C15.92 31.83 15 31.33 15 30.5Z"
        fill="white"
      />
      <path
        d="M24 12.5L33.6 18.25M24 35.5L14.4 29.75"
        stroke="url(#logo-icon-line)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="logo-icon-bg"
          x1="6"
          y1="4"
          x2="44"
          y2="45"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2563EB" />
          <stop offset="0.48" stopColor="#4F46E5" />
          <stop offset="1" stopColor="#9333EA" />
        </linearGradient>
        <linearGradient
          id="logo-icon-line"
          x1="14.4"
          y1="12.5"
          x2="33.6"
          y2="35.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#67E8F9" />
          <stop offset="1" stopColor="#F0ABFC" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LogoFull({ className }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 172 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="logo-title"
    >
      <title id="logo-title">Qubain</title>
      <LogoIcon className="h-12 w-12" />
      <path
        d="M65.66 31.34C60.8 31.34 57.18 27.72 57.18 22.94C57.18 18.16 60.8 14.56 65.66 14.56C70.52 14.56 74.14 18.16 74.14 22.94C74.14 25.08 73.42 26.98 72.2 28.42L74.08 30.32L71.82 32.5L69.9 30.56C68.66 31.06 67.24 31.34 65.66 31.34ZM65.66 27.8C66.18 27.8 66.68 27.74 67.14 27.6L65.34 25.78L67.58 23.58L69.38 25.38C69.78 24.68 69.98 23.86 69.98 22.94C69.98 20.22 68.2 18.18 65.66 18.18C63.12 18.18 61.34 20.22 61.34 22.94C61.34 25.76 63.12 27.8 65.66 27.8Z"
        fill="currentColor"
      />
      <path
        d="M82.91 31.24C79.45 31.24 77.23 29.16 77.23 25.54V14.9H81.17V25.24C81.17 26.88 81.91 27.76 83.35 27.76C84.79 27.76 85.73 26.8 85.73 25.04V14.9H89.69V31H85.91V29.08C85.27 30.42 84.17 31.24 82.91 31.24Z"
        fill="currentColor"
      />
      <path
        d="M99.57 31.34C97.81 31.34 96.43 30.62 95.55 29.36V31H91.77V14.9H95.73V20.74C96.61 19.56 97.91 18.9 99.57 18.9C102.79 18.9 105.11 21.48 105.11 25.12C105.11 28.76 102.79 31.34 99.57 31.34ZM98.39 27.9C100.03 27.9 101.15 26.78 101.15 25.12C101.15 23.46 100.03 22.34 98.39 22.34C96.75 22.34 95.63 23.46 95.63 25.12C95.63 26.78 96.75 27.9 98.39 27.9Z"
        fill="currentColor"
      />
      <path
        d="M111.3 31.28C108.84 31.28 107.16 29.88 107.16 27.78C107.16 25.42 109.08 24.18 112.66 23.86L115.06 23.66V23.42C115.06 22.5 114.44 21.96 113.28 21.96C112.1 21.96 111.3 22.52 111.12 23.42H107.52C107.86 20.68 110.18 18.9 113.48 18.9C116.88 18.9 118.84 20.74 118.84 23.72V31H115.2V29.34C114.42 30.6 113.06 31.28 111.3 31.28ZM112.68 28.32C114.04 28.32 115.08 27.46 115.08 26.2V25.86L113.3 26.02C111.82 26.16 111.1 26.62 111.1 27.34C111.1 27.98 111.7 28.32 112.68 28.32Z"
        fill="currentColor"
      />
      <path
        d="M120.86 31V19.24H124.82V31H120.86ZM122.84 17.9C121.64 17.9 120.78 17.1 120.78 15.98C120.78 14.86 121.64 14.06 122.84 14.06C124.04 14.06 124.9 14.86 124.9 15.98C124.9 17.1 124.04 17.9 122.84 17.9Z"
        fill="currentColor"
      />
      <path
        d="M127.1 31V19.24H130.88V21.16C131.58 19.78 132.86 18.9 134.56 18.9C137.28 18.9 139.12 20.9 139.12 23.92V31H135.16V24.48C135.16 23.12 134.42 22.34 133.22 22.34C131.9 22.34 131.06 23.28 131.06 24.76V31H127.1Z"
        fill="currentColor"
      />
      <path
        d="M58.2 37.5H139.1"
        stroke="url(#logo-full-line)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="logo-full-line"
          x1="58.2"
          y1="37.5"
          x2="139.1"
          y2="37.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2563EB" />
          <stop offset="0.5" stopColor="#4F46E5" />
          <stop offset="1" stopColor="#9333EA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({ className }: LogoProps) {
  return <LogoFull className={className} />;
}
