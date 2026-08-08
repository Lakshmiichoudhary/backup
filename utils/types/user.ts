export interface User {
  id?: number;
  userName?: string | null;
  email?: string;
  mobile?: string;
  accessToken?: string;
  tokenType?: string;
  role?: string;
  userId?: string;
  permissions?: string[];
}

export interface UserData {
  accessToken: string;
  tokenType: string;
  userName: string | null;
  role: string;
  userId: string;
  permissions: string[];
}