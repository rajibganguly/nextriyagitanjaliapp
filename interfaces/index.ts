// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
  code?: string;
};



export interface IProjects {
  name: string; // input text
  projectid: string; //uuid auto generate
  categoryid: string; //predefined select
  companylogo: string; //image upload
  projectdomain: string;
  startdate: string; //new Date().toISOString() input date
  enddate: string; //new Date().toISOString() input date
  rolesresponsibilities: string; //textarea
  softwaretools: string; //textarea
  tag: string; //textarea
  projectmanager: string; //input text
  client: IClient;
  finalfeedback: string; // textarea
  timestamp: string; //new Date().toISOString() input date
  reference: IProjectScreen[]; // onclick add section
}

export interface IClient {
  name: string; //input text
  clientlogo: string; //input file upload base64
  description: string; //textarea
  projectmanager: string; //input text
  domain: string; //select
  budget: string; //input text with Doller
  teamsize: number; // input number
}
export interface IProjectScreen {
  title: string; //input text
  screenshot: string; //input file
  details: string; // textarea
  altertext: string; //input text
  comments: string; //textarea
}

export type IBlog = {
  id: number;
  tag: string;
  title: string;
  date: string;
  internallink: string;
  externallink: string;
  navImage: string;
  brief: string;
}
