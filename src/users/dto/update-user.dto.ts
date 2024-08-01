import { IsString, IsEmail, Length } from 'class-validator';

/**
 * Objeto de Transferencia de Datos para actualizar un usuario.
 */
export class UpdateUserDto   {
    /**
     * El nombre del usuario.
     * @type {string}
     */
    firstName: string;
  
    /**
     * El apellido del usuario.
     * @type {string}
     */
    lastName: string;
  
    /**
     * La dirección de correo electrónico del usuario.
     * @type {string}
     */
    email: string;
  
    /**
     * La edad del usuario.
     * @type {number}
     */
    age: number;
  
 
 
}
