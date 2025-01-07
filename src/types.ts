export interface Contact_t {
  // location: string;
  gmail: string;
  phone: string;
  linkedin: string;
  // github: string;
}

export interface Education_t {
  degree: string;
  institution: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

export interface Header_t {
  firstName: string;
  lastName: string;
  position: string;
}

export interface History_t {
  type: 'volunteer' | 'employment' | 'education';
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
  methodologies: Array<string>;
  design: Array<string>;
}

export interface Strength_t {
  id: string;
  name: string;
  points: Array<string>;
}

export type Summary_t = string;
