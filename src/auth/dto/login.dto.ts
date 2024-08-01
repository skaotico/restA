import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: 'El nombre de usuario del usuario' })
  @IsString()
  username: string;

  @ApiProperty({ description: 'La contraseña del usuario' })
  @IsString()
  password: string;
}
