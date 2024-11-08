export interface User {
    id?: number;
    name?: string;
    email?: string;
    profession?:string;
    salaire?:number
  }

  export const initUserState: UserState = {
    list: [],
    selectedUser: null,
    errorMessage: null,
  };
  
  export interface UserState {
    list: User[];
    selectedUser: User | null;
    errorMessage: string | null;
  }
  