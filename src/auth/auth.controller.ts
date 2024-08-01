import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseDto } from 'src/common/dto/response.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Maneja el inicio de sesión de un usuario.
   *
   * @param {LoginDto} loginDto - Los datos necesarios para iniciar sesión.
   * @returns {Promise<{ accessToken: string }>} Un objeto que contiene el token de acceso.
   */
  @ApiOperation({ summary: 'Iniciar sesión' })
  @ApiBody({
    type: LoginDto,
    description: 'Datos necesarios para iniciar sesión',
  })
  @ApiResponse({
    status: 200,
    description: 'Inicio de sesión exitoso',
    type: ResponseDto,
  })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas' })
  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
  ): Promise<ResponseDto<LoginResponseDto>> {
    return this.authService.login(loginDto);
  }
}
