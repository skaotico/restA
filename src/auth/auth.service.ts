import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service'; // Asegúrate de tener un servicio de usuarios
import { LoginDto } from './dto/login.dto';
import { ResponseDto } from 'src/common/dto/response.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@Injectable()
export class AuthService {
  constructor(
     
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    
    return null;
  }

  async login(loginDto: LoginDto): Promise<ResponseDto<LoginResponseDto>> {
    try {
      const payload = { data: 'prueba de token shaka', user: loginDto.username };
      const accessToken = this.jwtService.sign(payload);

      return {
        status: 'exito',
        message: 'Login exitoso',
        data: { access_token: accessToken },
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Login fallido',
        errors: error.message,
      };
    }
  }
}