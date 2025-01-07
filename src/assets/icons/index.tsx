import { ReactComponent as Accenture } from './Accenture.svg';
import { ReactComponent as ActNow } from './ActNow.svg';
import { ReactComponent as CodingHouse } from './CodingHouse.svg';
import { ReactComponent as Cypress } from './Cypress.svg';
import { ReactComponent as CSS } from './CSS.svg';
import { ReactComponent as Default } from './Default.svg';
import { ReactComponent as Github } from './Github.svg';
import { ReactComponent as Gmail } from './Gmail.svg';
import { ReactComponent as GraphQL } from './GraphQL.svg';
import { ReactComponent as Hackerone } from './Hackerone.svg';
import { ReactComponent as HTML } from './HTML.svg';
import { ReactComponent as JavaScript } from './JavaScript.svg';
import { ReactComponent as Linkedin } from './Linkedin.svg';
import { ReactComponent as Location } from './Location.svg';
import { ReactComponent as LWT } from './LWT.svg';
import { ReactComponent as Node } from './Node.svg';
import { ReactComponent as Phone } from './Phone.svg';
import { ReactComponent as PostgreSQL } from './PostgreSQL.svg';
import { ReactComponent as React } from './React.svg';
import { ReactComponent as ReactNative } from './ReactNative.svg';
import { ReactComponent as Redux } from './Redux.svg';
import { ReactComponent as Ruby } from './Ruby.svg';
import { ReactComponent as Sigma } from './Sigma.svg';
import { ReactComponent as Storybook } from './Storybook.svg';
import { ReactComponent as Teaching } from './Teaching.svg';
import { ReactComponent as TypeScript } from './TypeScript.svg';
import { ReactComponent as Webpack } from './Webpack.svg';
import { ReactComponent as WNE } from './WNE.svg';

export interface IconProps_t {
  size?: number;
  color?: string;
  className?: string;
}

export type IconName_t = keyof typeof iconMap;

export const iconMap: Record<string, React.FC<IconProps_t>> = {
  Accenture,
  ActNow,
  CodingHouse,
  Cypress,
  CSS,
  Default,
  Github,
  Gmail,
  GraphQL,
  Hackerone,
  HTML,
  JavaScript,
  Linkedin,
  Location,
  LWT,
  Node,
  Phone,
  PostgreSQL,
  React,
  ReactNative,
  Redux,
  Ruby,
  Sigma,
  Storybook,
  Teaching,
  TypeScript,
  Webpack,
  WNE,
};
