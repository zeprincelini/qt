export type Questions = {
  id: string;
  question: string;
  options: Array<string>;
};

export type Question = {
  question: string;
  options: Array<string>;
};

export type Token = {
  token: string;
};

export type Action = {
  isLoading: boolean;
  error: string;
  action?: () => void;
};
