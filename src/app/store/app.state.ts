export interface User {
    id?: number;
    name: string;
    email: string;
    phone?:string;
  }
  
  export interface UserState {
    list: User[];
    selectedUser: User | null;
    errorMessage: string | null;
  }
  