import {ERole} from './user.dto';

export interface JwtTokenDto {
  token: string;

}

export interface JwtPayload {
  id: number;
  firstname: string;
  role: ERole;
}

export interface RegisterDto {
  message: string;
}


