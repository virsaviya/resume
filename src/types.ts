export interface Education_t {
  degree: string;
  institution: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

export interface Header_t {
  name: string;
  position: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github?: string;
}

export interface History_t {
  id: string;
  organization: string;
  position: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  stack?: Array<string>; // @TODO create icon enum
}

export interface Skills_t {
  libraries: Array<string>;
  frameworks: Array<string>;
  methodologies: Array<string>;
  design: Array<string>;
}

export interface Strength_t {
  id: string;
  name: string;
  points: Array<string>;
}

export type Summary_t = string;
