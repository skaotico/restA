
import { IsString, IsEmail, Length } from 'class-validator';

/**
 * Objeto de Transferencia de Datos para crear un usuario.
 */
export class CreateUserDto {
  /**
   * El nombre del usuario.
   * Debe ser una cadena de texto con una longitud entre 1 y 50 caracteres.
   * @type {string}
   */
  @IsString()
  @Length(1, 50)
  nombre: string;

  /**
   * La dirección de correo electrónico del usuario.
   * Debe ser un correo electrónico válido con una longitud entre 1 y 100 caracteres.
   * @type {string}
   */
  @IsEmail()
  @Length(1, 100)
  email: string;

  /**
   * La contraseña del usuario.
   * Debe ser una cadena de texto con una longitud entre 6 y 100 caracteres.
   * @type {string}
   */
  @IsString()
  @Length(6, 100)
  contrasena: string;
}
