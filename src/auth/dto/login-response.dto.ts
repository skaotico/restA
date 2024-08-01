import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({ description: 'El token de acceso devuelto al iniciar sesión con éxito' })
  access_token: string;
}
