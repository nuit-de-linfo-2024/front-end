
export interface UserCreateDto{
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface UserLoginDto{
  email: string;
  password: string;
}
export interface UserDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  type?: ERole;
}



export enum ERole {
  ROLE_CLIENT = "Client",
  ROLE_ADMIN = "Admin",
}

