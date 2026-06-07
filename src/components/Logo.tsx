import { useId } from "react";

type LogoVariant = "light" | "dark";

type LogoProps = {
  className?: string;
  variant?: LogoVariant;
};

type LogoPalette = {
  outerOpacity: number;
  outerStart: string;
  outerEnd: string;
  nodeStart: string;
  nodeMiddle: string;
  nodeEnd: string;
  accentStart: string;
  accentEnd: string;
  highlight: string;
};

const palette = {
  light: {
    outerOpacity: 0.16,
    outerStart: "#0F172A",
    outerEnd: "#2563EB",
    nodeStart: "#2563EB",
    nodeMiddle: "#4F46E5",
    nodeEnd: "#9333EA",
    accentStart: "#06B6D4",
    accentEnd: "#7C3AED",
    highlight: "#EFF6FF",
  },
  dark: {
    outerOpacity: 0.24,
    outerStart: "#E0F2FE",
    outerEnd: "#A78BFA",
    nodeStart: "#67E8F9",
    nodeMiddle: "#60A5FA",
    nodeEnd: "#C084FC",
    accentStart: "#22D3EE",
    accentEnd: "#A78BFA",
    highlight: "#FFFFFF",
  },
} satisfies Record<LogoVariant, LogoPalette>;

export function LogoIcon({ className, variant = "dark" }: LogoProps) {
  const id = useId();
  const colors = palette[variant];
  const outerGradientId = `${id}-logo-outer`;
  const nodeGradientId = `${id}-logo-nodes`;
  const accentGradientId = `${id}-logo-accent`;

  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Technology growth icon"
    >
      <path
        d="M256 68L420 162V350L256 444L92 350V162L256 68Z"
        stroke={`url(#${outerGradientId})`}
        strokeWidth="28"
        strokeLinejoin="round"
        opacity={colors.outerOpacity}
      />
      <path
        d="M154 318L222 284L278 226L358 184"
        stroke={`url(#${accentGradientId})`}
        strokeWidth="34"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="154" cy="318" r="39" fill={`url(#${nodeGradientId})`} />
      <circle cx="222" cy="284" r="34" fill={`url(#${nodeGradientId})`} />
      <circle cx="278" cy="226" r="38" fill={`url(#${nodeGradientId})`} />
      <circle cx="358" cy="184" r="44" fill={`url(#${nodeGradientId})`} />
      <path
        d="M350 160L384 184L350 208"
        stroke={colors.highlight}
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M172 346L340 262"
        stroke={colors.highlight}
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.4"
      />
      <defs>
        <linearGradient
          id={outerGradientId}
          x1="92"
          y1="68"
          x2="420"
          y2="444"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.outerStart} />
          <stop offset="1" stopColor={colors.outerEnd} />
        </linearGradient>
        <linearGradient
          id={nodeGradientId}
          x1="122"
          y1="154"
          x2="392"
          y2="360"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.nodeStart} />
          <stop offset="0.48" stopColor={colors.nodeMiddle} />
          <stop offset="1" stopColor={colors.nodeEnd} />
        </linearGradient>
        <linearGradient
          id={accentGradientId}
          x1="154"
          y1="318"
          x2="358"
          y2="184"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.accentStart} />
          <stop offset="1" stopColor={colors.accentEnd} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LogoFull(props: LogoProps) {
  return <LogoIcon {...props} />;
}

export function Logo(props: LogoProps) {
  return <LogoIcon {...props} />;
}
