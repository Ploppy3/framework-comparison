export interface Block {
  texts?: string[];
  code?: Code;
}

interface Code {
  language: string;
  code: string;
}