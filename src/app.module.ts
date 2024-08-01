import { Module } from '@nestjs/common';
 
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
 
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Incluye todas las entidades automáticamente
      synchronize: true, // Utiliza esto solo en desarrollo
    }),
    AuthModule,
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'elShaskaseLaCome',
      signOptions: { expiresIn: '60m' },  
    }),
  ],
  controllers: [UsersController,AuthController],
  providers: [UsersService,AuthService],
})
export class AppModule {}
