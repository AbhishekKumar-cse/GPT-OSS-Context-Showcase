import type { SVGProps } from 'react';

export const Icons = {
  'best-overall': (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 1.5 3.09 6.26L22.5 9l-5 4.87L18.68 21 12 17.77 5.32 21l1.18-7.13L2 9l7.41-1.24L12 1.5z"/>
    </svg>
  ),
  'robotics': (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 8V4H8"/>
      <rect width="16" height="12" x="4" y="8" rx="2"/>
      <path d="M2 14h2"/>
      <path d="M20 14h2"/>
      <path d="M15 13v2"/>
      <path d="M9 13v2"/>
    </svg>
  ),
  'weirdest-hardware': (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 4.5 9 2"/>
      <path d="m13 4.5 2-2.5"/>
      <path d="M14 2.5 12 5l-2-2.5"/>
      <path d="m5 12 2.5-3"/>
      <path d="M6.5 14 4 12l2.5-2"/>
      <path d="m19 12-2.5 3"/>
      <path d="M17.5 14 20 12l-2.5-2"/>
      <path d="M11 19.5 9 22"/>
      <path d="m13 19.5 2 2.5"/>
      <path d="M14 21.5 12 19l-2 2.5"/>
      <circle cx="12" cy="12" r="6"/>
    </svg>
  ),
  'local-agent': (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22a10 10 0 1 0-10-10"/>
      <path d="M2 12h10"/>
      <path d="m9 19 3-7-6 2 3 5Z"/>
      <path d="M22 12a10 10 0 0 0-10-10v10z"/>
    </svg>
  ),
  'fine-tune': (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 21h10"/>
      <path d="M7 21V3"/>
      <path d="M14.5 3h5"/>
      <path d="M17 3v18"/>
      <path d="M22 21h-7.5"/>
      <path d="M12 11h-1.5"/>
      <path d="M12 7h-1.5"/>
      <path d="M12 15h-1.5"/>
    </svg>
  ),
  'wildcard': (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      <path d="M12 22.01V12h.01"/>
      <path d="M8.46 8.46l7.08 7.08"/>
      <path d="m12 12 3.54-3.54"/>
      <path d="m8.46 15.54 3.54-3.54"/>
    </svg>
  ),
  'for-humanity': (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9Z"/>
      <path d="M12 3v1a3 3 0 0 1 3 3h1a8 8 0 0 0-8-8 8 8 0 0 0-1 4"/>
      <path d="M12 21v-1a3 3 0 0 0-3-3H8a8 8 0 0 0 8 8 8 8 0 0 0 1-4"/>
    </svg>
  )
};

export type IconName = keyof typeof Icons;
