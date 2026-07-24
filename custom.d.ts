declare module '*.svg?react' {
  import type { FC, SVGProps } from 'react';

  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;
}

declare module '*.svg' {
  const src: string;
  export default src;
}
