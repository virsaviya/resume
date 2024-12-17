import { ReactComponent as Accenture } from './Accenture.svg';
import { ReactComponent as ActNow } from './ActNow.svg';
import { ReactComponent as CSS } from './CSS.svg';
import { ReactComponent as Default } from './Default.svg';
import { ReactComponent as GraphQL } from './GraphQL.svg';
import { ReactComponent as HackerOne } from './HackerOne.svg';
import { ReactComponent as JavaScript } from './JavaScript.svg';
import { ReactComponent as LWT } from './LWT.svg';
import { ReactComponent as Node } from './Node.svg';
import { ReactComponent as React } from './React.svg';
import { ReactComponent as Redux } from './Redux.svg';
import { ReactComponent as Sigma } from './Sigma.svg';
import { ReactComponent as Storybook } from './Storybook.svg';
import { ReactComponent as TypeScript } from './TypeScript.svg';
import { ReactComponent as Webpack } from './Webpack.svg';

export interface IconProps_t {
  size?: number;
  color?: string;
  className?: string;
}

export type IconName_t = keyof typeof iconMap;

export const iconMap: Record<string, React.FC<IconProps_t>> = {
  Accenture,
  CSS,
  Default,
  GraphQL,
  HackerOne,
  JavaScript,
  Node,
  React,
  Redux,
  Sigma,
  Storybook,
  TypeScript,
  Webpack,
  LWT,
  ActNow,
};
