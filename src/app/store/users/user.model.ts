export interface User {
    id?: number;
    name?: string;
    email?: string;
    profession?:string;
    salaire?:number
  }
  
  export interface UserState {
    list: User[];
    selectedUser: User | null;
    errorMessage: string | null;
  }
  