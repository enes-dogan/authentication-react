import { ActionFunction, Params } from 'react-router-dom';

export interface EventTypes {
  get(arg0: string): string;
  title: string;
  image: string;
  date: string;
  description: string;
  id: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface EventFormProps {
  method: 'POST' | 'PATCH';
  event?: EventTypes;
}

export interface PageContentProps {
  title: string;
  children: React.ReactNode;
}

export interface EventDetailLoaderParams {
  params: Params<string>;
}

export type formEventActionFn = ActionFunction<{
  request: {
    method: string;
    formData: () => Promise<FormDataEntryValue>;
  };
  params: Params<string>;
}>;

export interface DeleteEventActionParams {
  request: {
    method: string;
  };
  params: Params<string>;
}

export type newsletterActionFn = ActionFunction<{
  request: {
    formData: () => Promise<FormDataEntryValue>;
  };
}>;

export interface AuthActionParams {
  request: {
    method: string;
    formData: () => Promise<FormDataEntryValue>;
  };
}

export type authActionFn = ActionFunction<AuthActionParams>;

export interface httpReqError {
  message: string;
  errors: EventTypes;
}

export interface FetcherTypes {
  data: { message: string };
  state: 'idle' | 'loading' | 'submitting';
}
